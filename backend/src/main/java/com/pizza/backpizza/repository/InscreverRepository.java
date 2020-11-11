package com.pizza.backpizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pizza.backpizza.models.Inscrever;
@Repository
public interface InscreverRepository extends JpaRepository<Inscrever, Long> {

/*	
	@Query("SELECT u FROM Cadastro u WHERE u.email = ?1 and u.senha = ?2")
	Inscrever findcadastroforemailsenha(String email, String senha);
	
	@Query("SELECT u FROM Cadastro u WHERE u.cpf= ?1 and u.email = ?2")
	Inscrever encontrarcadastrocpfsenha(String cpf, String email); */
}
