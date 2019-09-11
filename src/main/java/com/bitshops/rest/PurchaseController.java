
package com.bitshops.rest;

import com.bitshops.model.purchase.Purchase;
import com.bitshops.model.user.User;
import com.bitshops.service.PurchaseService;
import java.security.Principal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alejandromdz
 */
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class PurchaseController {
    
    @Autowired
    private PurchaseService purchaseService;
    
    @PreAuthorize("hasRole('USER')")
    @RequestMapping(method = GET, value = "self/purchase")
    public List<Purchase> loadByOwner(){
        User currentUser=(User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        return this.purchaseService.findByBuyer(currentUser);
    
    }
    
}
