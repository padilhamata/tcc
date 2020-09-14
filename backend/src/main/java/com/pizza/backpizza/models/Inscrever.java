package com.pizza.backpizza.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Cadastro {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nome;
	private String sobreNome;
	private String cpf;
	private String telefone;
	private String avenida;
	private String cep;
	private String setor;
	private String cidade;
	private String email;
	private String senha;
}
