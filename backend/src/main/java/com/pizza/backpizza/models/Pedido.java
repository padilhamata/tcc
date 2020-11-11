package com.pizza.backpizza.models;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Pedido {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@ElementCollection (targetClass = String.class) 
	private List<String> pedidos;
	private double desconto;
	private double taxa_entrega;
	private int forma_pagamento;
	
	
	
	private Date data;
	private Date hora;
	private String status;
	
}
