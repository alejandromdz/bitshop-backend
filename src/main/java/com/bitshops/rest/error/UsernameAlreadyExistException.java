/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bitshops.rest.error;

/**
 *
 * @author erikbrisson
 */
public class UsernameAlreadyExistException extends RuntimeException {
    
    
    public UsernameAlreadyExistException() {
        super();
    }

    public UsernameAlreadyExistException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public UsernameAlreadyExistException(final String message) {
        super(message);
    }

    public UsernameAlreadyExistException(final Throwable cause) {
        super(cause);
    }
    
}
