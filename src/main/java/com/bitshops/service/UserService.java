package com.bitshops.service;

import com.bitshops.model.user.User;
import com.bitshops.model.user.VerificationToken;
import com.bitshops.repository.AuthorityRepository;
import com.bitshops.repository.UserRepository;
import com.bitshops.repository.VerificationTokenRepository;
import com.bitshops.rest.error.EmailAlreadyExistException;
import com.bitshops.rest.error.UsernameAlreadyExistException;
import java.util.Arrays;
import java.util.Calendar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthorityRepository authorityRepository;

    @Autowired
    private VerificationTokenRepository tokenRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public static final String TOKEN_INVALID = "invalidToken";
    public static final String TOKEN_EXPIRED = "expired";
    public static final String TOKEN_VALID = "valid";


    public void createVerificationTokenForUser(final User user, final String token) {
        final VerificationToken myToken = new VerificationToken(token, user);
        tokenRepository.save(myToken);
    }

    public String validateVerificationToken(String token) {
        final VerificationToken verificationToken = tokenRepository.findByToken(token);
        if (verificationToken == null) {
            return TOKEN_INVALID;
        }

        final User user = verificationToken.getUser();
        final Calendar cal = Calendar.getInstance();
        if ((verificationToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0) {
            tokenRepository.delete(verificationToken);
            return TOKEN_EXPIRED;
        }

        user.setEnabled(true);
        // tokenRepository.delete(verificationToken);
        userRepository.save(user);
        return TOKEN_VALID;
    }

    public User registerNewUserAccount(final User user) {
        if (emailExist(user.getEmail())) {
            throw new EmailAlreadyExistException("There is an account with that email adress: " + user.getEmail());
        }
        if (usernameExist(user.getUsername())){
            throw new UsernameAlreadyExistException("There is an account with that username: "+ user.getUsername());
        }
        final User newUser = new User();

        newUser.setUsername(user.getUsername());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setEmail(user.getEmail());
        newUser.setAuthorities(Arrays.asList(authorityRepository.findByName("ROLE_USER")));
        
        return userRepository.save(newUser);
    }

    @PreAuthorize("hasRole('USER')")
    public User findByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public User findById(Long id) throws AccessDeniedException {
        return userRepository.findOne(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public List<User> findAll() throws AccessDeniedException {
        return userRepository.findAll();
    }
    
    public void save(User user){
        userRepository.save(user);
    }
    
    

    // Util methods
    private boolean emailExist(final String email) {
        return userRepository.findByEmail(email) != null;
    }
    
     private boolean usernameExist(final String username) {
        return userRepository.findByUsername(username) != null;
    }


}
