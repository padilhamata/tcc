package com.pizza.backpizza.config;


//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig /*extends WebSecurityConfigurerAdapter*/{
/*
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// TODO Auto-generated method stub
		http.authorizeRequests()
		.anyRequest().authenticated()
		.and()
		.httpBasic()
		.and()
		.csrf()
		.disable();
		
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		auth.inMemoryAuthentication()
		.withUser("lucas").password(encoder.encode("lucas")).roles("USER")
		.and()
		.withUser("admin").password(encoder.encode("admin")).roles("USER","ADMIN");
	}*/
}
