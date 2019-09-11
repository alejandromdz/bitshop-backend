package com.bitshops.repository;

import com.bitshops.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author alejandromdz
 */
public interface ProductRepository extends JpaRepository<Product, Long> {

}
