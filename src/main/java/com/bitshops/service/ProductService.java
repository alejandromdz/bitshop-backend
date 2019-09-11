package com.bitshops.service;

import com.bitshops.model.product.Product;
import com.bitshops.repository.ProductRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alejandromdz
 */
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product findById(Long id) {
        return this.productRepository.findOne(id);
    }

    public List<Product> findAll() {
        return this.productRepository.findAll();
    }
}
