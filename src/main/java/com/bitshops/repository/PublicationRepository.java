package com.bitshops.repository;

import com.bitshops.model.product.Publication;
import com.bitshops.model.user.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author alejandromdz
 */
public interface PublicationRepository extends JpaRepository<Publication, Long> {
    public List<Publication>findByOwner(User owner);
}
