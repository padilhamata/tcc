package com.pizza.backpizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pizza.backpizza.models.Crud;

@Repository
public interface CrudRepository extends JpaRepository<Crud, Long> {

	Crud findById(long id);
	Crud findByUsername(String username);
	
	
}
