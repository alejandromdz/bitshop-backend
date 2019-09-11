package com.bitshops.repository;

import com.bitshops.model.user.User;
import com.bitshops.model.user.VerificationToken;
import java.util.Date;
import java.util.stream.Stream;
import org.springframework.data.jpa.repository.*;

/**
 *
 * @author alejandromdz
 */
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

    VerificationToken findByToken(String token);

    VerificationToken findByUser(User user);

    Stream<VerificationToken> findAllByExpiryDateLessThan(Date now);

    void deleteByExpiryDateLessThan(Date now);

    @Modifying
    @Query("delete from VerificationToken t where t.expiryDate <= ?1")
    void deleteAllExpiredSince(Date now);
}
