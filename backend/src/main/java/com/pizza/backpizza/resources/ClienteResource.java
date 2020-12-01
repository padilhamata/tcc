package com.pizza.backpizza.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizza.backpizza.models.Cliente;
import com.pizza.backpizza.models.Inscrever;
import com.pizza.backpizza.repository.ClienteRepository;

@CrossOrigin
@RestController
@RequestMapping(value= "/api/inscrever")
public class InscreverResource {

	@Autowired
	ClienteRepository clienteRepository;
	
	@PostMapping
	public Inscrever salvaInscricao(@RequestBody Cliente cliente) {
		 clienteRepository.save(cliente);
		return null;
	}
	
	@CrossOrigin
	@PostMapping(value = "/logon")
	public Inscrever verificaEmail (@RequestBody Cliente cliente) {
		clienteRepository.findcadastroforemailsenha(cliente.getEmail(), cliente.getSenha());
		return null; 
		
		//Fazer autenticação
	
	}
	@CrossOrigin
	@PostMapping(value = "/encontreconta")
	public Inscrever trocaSenha (@RequestBody Inscrever inscrever) {
	/*	Inscrever cadastrados = 	InscreverRepository.encontrarcadastrocpfsenha(inscrever.getCpf(),inscrever.getEmail());
	EnviarEmail.enviarEmail(cadastrados.getEmail());*/
	
	
	return null	;
	}
	
	
}
