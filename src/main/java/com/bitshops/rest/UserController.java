package com.bitshops.rest;

import com.bitshops.model.product.Publication;
import com.bitshops.model.user.User;
import com.bitshops.service.PublicationService;
import com.bitshops.service.UserService;
import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;

import static org.springframework.web.bind.annotation.RequestMethod.*;


@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private PublicationService publicationService;

    @RequestMapping(method = GET, value = "/user/{userId}")
    @PreAuthorize("hasRole('USER')")
    public User loadById(@PathVariable Long userId) {
        return this.userService.findById(userId);
    }

    
    @RequestMapping(method = GET, value = "/user")
    @PreAuthorize("hasRole('USER')")
    public List<User> loadAll() {
        return this.userService.findAll();
    }

    @RequestMapping(method=GET,value="/self")
    @PreAuthorize("hasRole('USER')")
    public User user() {
        return (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
    }
    
    @RequestMapping(method=PUT,value="/self")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map> updateInfo(@RequestBody User userInfo) {
        
        Map<String, String> result = new HashMap<>();
        
        User currentUser= (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        
        //allowed changes
        currentUser.setFirstname(userInfo.getFirstname());
        currentUser.setLastname(userInfo.getLastname());
        currentUser.setTelephone(userInfo.getTelephone());
        currentUser.setAddress(userInfo.getAddress());
        
        try{
            this.userService.save(currentUser);
            result.put("result", "Success");
            return ResponseEntity.accepted().body(result);
        }catch(Exception e){
            result.put("result","An error occurred please try again later.");
            return ResponseEntity.badRequest().body(result);
        }
    }
    
    
    @RequestMapping("/self/publication")
    @PreAuthorize("hasRole('USER')")
    public List<Publication> userPublications(){
        User currentUser=(User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        return (List<Publication>) publicationService.findByOwner(currentUser);
    }
            

}
