package com.bitshops.repository;

import com.bitshops.model.user.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author alejandromdz
 */
public interface AuthorityRepository extends JpaRepository<Authority, Long> {

    Authority findByName(String name);

    @Override
    void delete(Authority authority);

}
