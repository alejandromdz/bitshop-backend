package com.bitshops.model.product;

import com.bitshops.model.user.User;
import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import org.hibernate.search.annotations.*;

/**
 *
 * @author alejandromdz
 */
@Indexed
@Entity
@Table(name = "PUBLICATION")
public class Publication implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @JsonIdentityInfo(generator = PropertyGenerator.class, property = "username")
    @JsonIdentityReference(alwaysAsId = true)
    private User owner;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    private Product product;
    
    @Column(name="title")
    private String title;
    
    @Column(name="price")
    private Long price;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "publication", orphanRemoval = true)
    private List<PublicationPhoto> photos = new ArrayList<>();

    @Lob
    @Column(name = "description")
    @Field
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }
    
    public List<PublicationPhoto> getPhotos() {
        return photos;
    }

    public void addPublicationPhoto(PublicationPhoto photo) {
        this.photos.add(photo);
        photo.setPublication(this);
    }

    public void removePublicationPhoto(PublicationPhoto photo) {
        photo.setPublication(null);
        this.photos.remove(photo);
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
