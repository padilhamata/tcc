package com.pizza.backpizza.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.validator.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
public class Pessoa extends AbstractMethodError {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

private String nome;
private String email;
private String senha;

}
