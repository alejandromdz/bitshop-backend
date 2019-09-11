package com.bitshops.rest;

import com.bitshops.model.product.Publication;
import com.bitshops.service.PublicationService;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 *
 * @author alejandromdz
 */
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class PublicationController {

    @Autowired
    private PublicationService publicationService;

    @Autowired
    private ApplicationEventPublisher eventPublisher;

    @RequestMapping(method = GET, value = "/publication/{publicationId}")
    public Publication loadById(@PathVariable Long publicationId) {
        return publicationService.findById(publicationId);
    }

    @RequestMapping(method = GET, value = "/publication")
    public List<Publication> loadAll() {
        return publicationService.findAll();
    }

    @RequestMapping(method = GET, value = "/publication", params = {"page", "size"})
    public List<Publication> loadPaginated(
            @RequestParam("page") int page,
            @RequestParam("size") int size) {
        Page<Publication> resultPage = publicationService.findPaginated(page, size);

        return resultPage.getContent();
    }

    @RequestMapping(method = GET, value = "/publication", params = {"search"})
    public List<Publication> search(@RequestParam("search") String searchQuery) {
        List<Publication> searchResults = null;

        try {
            searchResults = this.publicationService.fuzzySearch(searchQuery);

        } catch (Exception ex) {
            ex.printStackTrace();
            return new ArrayList<>();
        }

        return searchResults;

    }
    
    @PreAuthorize("hasRole('USER')")
    @RequestMapping(method=POST, value="/publication")
    public ResponseEntity<Map> cratePublication(@RequestBody Publication publication){
        
        Map<String, String> result = new HashMap<>();
        try {
            publicationService.createPublication(publication);
        }//TODO: Customize Exception 
        catch (Exception e) {
            result.put("result","An error occurred please try again later.");
            return ResponseEntity.badRequest().body(result);
        }
        result.put("result", "Success");
        return ResponseEntity.accepted().body(result);
    }

}
