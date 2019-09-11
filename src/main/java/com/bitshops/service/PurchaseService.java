
package com.bitshops.service;

import com.bitshops.model.purchase.Purchase;
import com.bitshops.model.user.User;
import com.bitshops.repository.PurchaseRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 *
 * @author alejandromdz
 */
@Service
public class PurchaseService {
    
    @Autowired
    private PurchaseRepository purchaseRepository;
    
    public List<Purchase> findByBuyer(User buyer){
        
        return this.purchaseRepository.findByBuyer(buyer);
    }
    
}
