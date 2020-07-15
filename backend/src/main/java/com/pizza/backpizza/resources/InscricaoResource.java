package com.pizza.backpizza.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizza.backpizza.models.Cadastro;
import com.pizza.backpizza.repository.CadastroRepository;
import com.pizza.backpizza.util.EnviarEmail;

import lombok.var;

@CrossOrigin
@RestController
@RequestMapping(value= "/api/cadastro")
public class InscricaoResource {

	@Autowired
	CadastroRepository cadastroRepository;
	
	@PostMapping
	public Cadastro salvaInscricao(@RequestBody Cadastro cadastro) {
		return cadastroRepository.save(cadastro);
	}
	
	@CrossOrigin
	@PostMapping(value = "/logon")
	public Cadastro verificaEmail (@RequestBody Cadastro cadastro) {
		return cadastroRepository.findcadastroforemailsenha(cadastro.getEmail(), cadastro.getSenha());
		
		//Fazer autenticação
	
	}
	@CrossOrigin
	@PostMapping(value = "/encontreconta")
	public Cadastro trocaSenha (@RequestBody Cadastro cadastro) {
	Cadastro cadastrados = 	cadastroRepository.encontrarcadastrocpfsenha(cadastro.getCpf(),cadastro.getEmail());
	EnviarEmail.enviarEmail(cadastrados.getEmail());
	
	
	return null	;
	}
	
	
}
