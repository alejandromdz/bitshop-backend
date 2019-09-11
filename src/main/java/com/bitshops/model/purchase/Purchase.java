
package com.bitshops.model.purchase;

import com.bitshops.model.product.Publication;
import com.bitshops.model.user.User;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator;
import java.io.Serializable;
import javax.persistence.*;

/**
 *
 * @author alejandromdz
 */
@Entity
@Table(name="PURCHASE")
public class Purchase implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "publication_id")
    @JsonIdentityInfo(generator = PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Publication publication;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "buyer_id")
    @JsonIdentityInfo(generator = PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private User buyer;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Publication getPublication() {
        return publication;
    }

    public void setPublication(Publication publication) {
        this.publication = publication;
    }

    public User getBuyer() {
        return buyer;
    }

    public void setBuyer(User buyer) {
        this.buyer = buyer;
    }    
    
    
}
