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
public class Crud extends AbstractMethodError {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
@NotEmpty
@Column(unique=true)
private String username;
@NotEmpty
@JsonIgnore
private String password;
@NotEmpty
private String name;
@NotEmpty
private boolean admin;
}
