/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miage.repositories;

import com.miage.models.Status;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Tamer
 */
public interface StatusRepository extends CrudRepository<Status, Integer> {

}
