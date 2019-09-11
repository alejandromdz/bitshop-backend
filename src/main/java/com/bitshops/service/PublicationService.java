package com.bitshops.service;

import com.bitshops.model.product.Product;
import com.bitshops.model.product.Publication;
import com.bitshops.model.product.PublicationPhoto;
import com.bitshops.model.user.User;
import com.bitshops.repository.PublicationRepository;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.transaction.Transactional;
import org.apache.lucene.search.Query;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.jpa.Search;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 *
 * @author alejandromdz
 */
@Service
public class PublicationService {

    @Autowired
    private final EntityManager entityManager;

    @Autowired
    private PublicationRepository publicationRepository;

    @Autowired
    public PublicationService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public Publication findById(Long id) {
        return this.publicationRepository.findOne(id);
    }

    public List<Publication> findAll() {
        return this.publicationRepository.findAll();
    }

    public Page<Publication> findPaginated(int page, int size) {
        return this.publicationRepository.findAll(new PageRequest(page, size));
    }
    
    public List<Publication> findByOwner(User owner){
        return this.publicationRepository.findByOwner(owner);
    }
    
    @Transactional
    public void createPublication(Publication pub){
        //returns a detached entity
        User currentUser=(User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User persistedUser=entityManager.merge(currentUser);
        Publication newPub=new Publication();
        
        newPub.setTitle(pub.getTitle());
        newPub.setOwner(persistedUser);
        newPub.setPrice(pub.getPrice());
        newPub.setDescription(pub.getDescription());
        newPub.setProduct(new Product());
        
        //assigning images
        for(PublicationPhoto photo:pub.getPhotos()){
            newPub.addPublicationPhoto(photo);
        }    
        this.publicationRepository.save(newPub);
    
    }

    @Transactional
    public List<Publication> fuzzySearch(String searchTerm) {

        FullTextEntityManager fullTextEntityManager = Search.getFullTextEntityManager(entityManager);

        QueryBuilder qb = fullTextEntityManager
                .getSearchFactory()
                .buildQueryBuilder()
                .forEntity(Publication.class)
                .get();

        Query luceneQuery = qb
                .keyword()
                .fuzzy()
                .withEditDistanceUpTo(1)
                .withPrefixLength(1)
                .onFields("description")
                .matching(searchTerm)
                .createQuery();

        javax.persistence.Query jpaQuery = fullTextEntityManager.createFullTextQuery(luceneQuery, Publication.class);

        // execute search
        List<Publication> publicationList = null;
        try {
            publicationList = jpaQuery.getResultList();
        } catch (NoResultException nre) {
            nre.printStackTrace();
        }

        return publicationList;

    }

    public void indexPublication() {
        try {
            FullTextEntityManager fullTextEntityManager = Search.getFullTextEntityManager(entityManager);
            fullTextEntityManager.createIndexer().startAndWait();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
