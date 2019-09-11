package com.bitshops.model.product;

import javax.persistence.*;
import java.io.Serializable;

/**
 *
 * @author alejandro
 */
@Entity
@Table(name = "PRODUCT")
public class Product implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String productname) {
        this.name = productname;
    }

}
