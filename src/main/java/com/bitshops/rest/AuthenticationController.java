package com.bitshops.rest;

import com.bitshops.model.user.User;
import com.bitshops.model.user.UserTokenState;
import com.bitshops.rest.error.EmailAlreadyExistException;
import com.bitshops.rest.error.UsernameAlreadyExistException;
import com.bitshops.rest.event.OnRegistrationCompleteEvent;
import com.bitshops.security.TokenHelper;
import com.bitshops.service.CustomUserDetailsService;
import com.bitshops.service.UserService;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import org.springframework.context.ApplicationEventPublisher;
import static org.springframework.web.bind.annotation.RequestMethod.POST;


@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {

    @Autowired
    ApplicationEventPublisher eventPublisher;

    @Autowired
    private UserService userService;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    TokenHelper tokenHelper;

    @Value("${jwt.expires_in}")
    private int EXPIRES_IN;

    @Value("${jwt.cookie}")
    private String TOKEN_COOKIE;

    @RequestMapping(value = "/refresh", method = RequestMethod.GET)
    public ResponseEntity<?> refreshAuthenticationToken(HttpServletRequest request, HttpServletResponse response) {

        String authToken = tokenHelper.getToken(request);
        if (authToken != null && tokenHelper.canTokenBeRefreshed(authToken)) {
            // TODO check user password last update
            String refreshedToken = tokenHelper.refreshToken(authToken);

            Cookie authCookie = new Cookie(TOKEN_COOKIE, (refreshedToken));
            authCookie.setPath("/");
            authCookie.setHttpOnly(true);
            authCookie.setMaxAge(EXPIRES_IN);
            // Add cookie to response
            response.addCookie(authCookie);

            UserTokenState userTokenState = new UserTokenState(refreshedToken, EXPIRES_IN);
            return ResponseEntity.ok(userTokenState);
        } else {
            UserTokenState userTokenState = new UserTokenState();
            return ResponseEntity.accepted().body(userTokenState);
        }
    }

    @RequestMapping(value = "/changePassword", method = RequestMethod.POST)
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> changePassword(@RequestBody PasswordChanger passwordChanger) {
        userDetailsService.changePassword(passwordChanger.oldPassword, passwordChanger.newPassword);
        Map<String, String> result = new HashMap<>();
        result.put("result", "success");
        return ResponseEntity.accepted().body(result);
    }

    @RequestMapping(value = "/signup", method = POST)
    public ResponseEntity<Map> signup(@RequestBody User user, HttpServletRequest request) {
        final User registeredUser;
        Map<String, String> result = new HashMap<>();
        try {
            registeredUser = userService.registerNewUserAccount(user);
        }catch (EmailAlreadyExistException e) {
            result.put("result", "There's an account mail with that email");
            return ResponseEntity.badRequest().body(result);
        }catch(UsernameAlreadyExistException e){
            result.put("result", "The username is already taken");
            return ResponseEntity.badRequest().body(result);
        }
        catch(Exception ex){
             result.put("result", "An error occurred while creating your account, try again later");
            return ResponseEntity.badRequest().body(result);
        }
        
            try {
                String appUrl = request.getContextPath();
                eventPublisher.publishEvent(new OnRegistrationCompleteEvent(registeredUser, request.getLocale(), appUrl));
            } catch (Exception e) {
                e.printStackTrace();
                result.put("result", "An error occurred while sending confirmation email, try to resend later");
                return ResponseEntity.badRequest().body(result);
            }
        
        result.put("result", "Success");
        return ResponseEntity.accepted().body(result);
    }

    @RequestMapping(value = "/registrationConfirm", method = RequestMethod.GET)
    public void confirmRegistration(HttpServletResponse response, @RequestParam("token") final String token) throws IOException {
        final String result = userService.validateVerificationToken(token);

        if (result.equals("valid")) {
            response.sendRedirect("/?redirect=login");
            return;
        }
        response.sendRedirect("/?redirect=pagenotfound");
    }

    static class PasswordChanger {

        public String oldPassword;
        public String newPassword;
    }

}
