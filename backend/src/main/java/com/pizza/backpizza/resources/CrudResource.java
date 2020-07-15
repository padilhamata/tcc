package com.pizza.backpizza.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizza.backpizza.models.Crud;
import com.pizza.backpizza.repository.CrudRepository;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/crud")
public class ProdutoResource {

	@Autowired
	CrudRepository crudRepository;
	
	@GetMapping
	public List<Crud> listaProdutos() {
		return crudRepository.findAll();
	}

	@GetMapping("/{id}")
	public Crud listaProdutosUnico(@PathVariable(value = "id") long id) {
		return crudRepository.findById(id);
	}

	@PostMapping
	public Crud salvaProduto(@RequestBody Crud crud) {
		return crudRepository.save(crud);
	}
	
	@DeleteMapping("/{id}")
	public void deletaCrud(@PathVariable(value = "id") long id) {
		crudRepository.deleteById(id);
	}
	
	@PutMapping
	public Crud atualizaProduto(@RequestBody Crud crud) {
		return crudRepository.save(crud);
	}
}
