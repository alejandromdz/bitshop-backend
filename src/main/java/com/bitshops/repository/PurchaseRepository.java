
package com.bitshops.repository;

import com.bitshops.model.purchase.Purchase;
import com.bitshops.model.user.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author alejandromdz
 */
public interface PurchaseRepository extends JpaRepository<Purchase, Long>{
    
    public List<Purchase> findByBuyer(User buyer);
    
}
