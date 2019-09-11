package com.bitshops.rest.listener;

import com.bitshops.model.mail.Mail;
import com.bitshops.model.user.User;
import com.bitshops.rest.event.OnRegistrationCompleteEvent;
import com.bitshops.service.MailService;
import com.bitshops.service.UserService;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;


/**
 *
 * @author alejandromdz
 */
@Component
public class RegistrationListener implements
        ApplicationListener<OnRegistrationCompleteEvent> {

    @Autowired
    private UserService userService;
    
    @Autowired
    MailService mailService;

    @Override
    public void onApplicationEvent(OnRegistrationCompleteEvent event) {
        this.confirmRegistration(event);

    }

    private void confirmRegistration(OnRegistrationCompleteEvent event) {
        String token = UUID.randomUUID().toString();
        Mail mail = new Mail();
        
        User user = event.getUser();
        userService.createVerificationTokenForUser(user, token);
        
        mail.setMailFrom("info@bitshops.com");
        mail.setMailTo(user.getEmail());
        mail.setMailSubject("Registration Confirmation");
        
        Map < String, Object > model = new HashMap < String, Object > ();
        model.put("url", "https://bitshop.herokuapp.com/api/registrationConfirm?token="+ token);
        model.put("username",user.getUsername());
        
        mail.setModel(model);

        mailService.sendEmail(mail,"email/confirmsignup.ftl");
    }
}
