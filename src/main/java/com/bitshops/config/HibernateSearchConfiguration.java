package com.bitshops.config;

import com.bitshops.service.PublicationService;
import javax.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@EnableAutoConfiguration
@Configuration
public class HibernateSearchConfiguration {

    @Autowired
    private EntityManager entityManager;

    @Bean
    PublicationService publicationSearchService() {
        PublicationService publicationService = new PublicationService(entityManager);
        publicationService.indexPublication();
        return publicationService;
    }
}
