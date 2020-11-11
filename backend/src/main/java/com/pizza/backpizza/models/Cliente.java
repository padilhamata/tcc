package com.pizza.backpizza.models;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Cliente extends Pessoa {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;


private int telefone;
private String rua;
private int Quadra;
private int numero;
private int cep;
}
