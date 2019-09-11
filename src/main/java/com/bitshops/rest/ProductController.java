package com.bitshops.rest;

import com.bitshops.model.product.Product;
import com.bitshops.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 *
 * @author alejandromdz
 */
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(method = GET, value = "/product")
    public List<Product> loadAll() {
        return this.productService.findAll();
    }

    @RequestMapping(method = GET, value = "/product/{productId}")
    public Product loadByID(@PathVariable Long productId) {
        return this.productService.findById(productId);
    }
}
