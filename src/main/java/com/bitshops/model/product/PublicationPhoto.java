/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bitshops.model.product;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator;
import java.io.Serializable;
import javax.persistence.*;

/**
 *
 * @author alejandromdz
 */
@Entity
@Table(name = "PUBLICATION_PHOTO")
public class PublicationPhoto implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "URL")
    private String URL;

    @ManyToOne
    @JsonIdentityInfo(generator = PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Publication publication;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public Publication getPublication() {
        return publication;
    }

    public void setPublication(Publication publication) {
        this.publication = publication;
    }

}
