package com.pizza.backpizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pizza.backpizza.models.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

	Cliente findById(long id);
	
	
	
	@Query("SELECT u FROM Cliente u WHERE u.email = ?1 and u.senha = ?2")
	Cliente findcadastroforemailsenha(String email, String senha);
	
	/*@Query("SELECT u FROM Cliente u WHERE u.cpf= ?1 and u.email = ?2")
	Cliente encontrarcadastrocpfsenha(String cpf, String email);*/ 
	
}
