package com.pizza.backpizza.resources;


import java.util.List;

import org.apache.mahout.cf.taste.impl.neighborhood.ThresholdUserNeighborhood;
import org.apache.mahout.cf.taste.impl.recommender.GenericUserBasedRecommender;
import org.apache.mahout.cf.taste.impl.similarity.PearsonCorrelationSimilarity;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.neighborhood.UserNeighborhood;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.UserBasedRecommender;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;
import org.postgresql.ds.PGPoolingDataSource;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizza.backpizza.models.Pedido;
import com.pizza.backpizza.repository.PedidoRepository;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/pedido")
public class PedidoResource {

	@Autowired
	PedidoRepository pedidoRepository;
	
	
/*	@GetMapping
	public List<Crud> listaProdutos() {
		return pedidoRepository.findAll();
	}
*/
	/*@GetMapping("/{id}")
	public Pedido listaProdutosUnico(@PathVariable(value = "id") long id) {
		return pedidoRepository.findById(id);
	}*/

	@PostMapping
	public Pedido salvaProduto(@RequestBody Pedido pedido) {
		return pedidoRepository.save(pedido);
	}
/*	
	@DeleteMapping("/{id}")
	//@PreAuthorize("hasRole('ADMIN')")
	public void deletaCrud(@PathVariable(value = "id") long id) {
		pedidoRepository.deleteById(id);
	}
	
	@PutMapping
	public Pedido atualizaProduto(@RequestBody Pedido pedido) {
		return pedidoRepository.save(pedido);
	}
	
	@PutMapping
		   public void recomendacoes(@RequestBody Pedido pedido){
		
		/* org.postgresql.ds.PGPoolingDataSource ds = new org.postgresql.ds.PGPoolingDataSource();
		    ds.setUrl(url);
		    ds.setUser(user);
		    ds.setPassword(password);
		    /* the connection pool will have 10 to 20 connections */
		   /* ds.setInitialConnections(10);
		    ds.setMaxConnections(20);
		    /* use SSL connections without checking server certificate */
		/*    ds.setSslMode("require");
		    ds.setSslfactory("org.postgresql.ssl.NonValidatingFactory");
		
		      try{
		         //Creating data model
		    	//DataModel datamodel = new FileDataModel(new File("data")); //data
		    	  org.postgresql.ds.PGPoolingDataSource source = new org.postgresql.ds.PGPoolingDataSource();
		    	
		    	  source.setDataSourceName(properties.getProperty("DATABASE_NAME"));
		    	  source.setServerName("127.0.0.1");
		    	  source.setDatabaseName(properties.getProperty("DATABASE_NAME"));
		    	  source.setUser(properties.getProperty("DATABASE_USER"));
		    	  source.setPassword(properties.getProperty("DATABASE_PASS"));
		    	  source.setMaxConnections(50);

		    	  DataModel model =new  PostgreSQLJDBCDataModel(
		    	                              source,
		    	                              "mahout_teble",
		    	                              "user_id",
		    	                              "item_id",
		    	                              "preference",
		    	                              "timestamp"
		    	                              )
		    	                      );
		      
		         //Creating UserSimilarity object.
		         UserSimilarity usersimilarity = new PearsonCorrelationSimilarity(datamodel);
		      
		         //Creating UserNeighbourHHood object.
		         UserNeighborhood userneighborhood = new ThresholdUserNeighborhood(3.0, usersimilarity, datamodel);
		      
		         //Create UserRecomender
		         UserBasedRecommender recommender = new GenericUserBasedRecommender(datamodel, userneighborhood, usersimilarity);
		        
		         List<RecommendedItem> recommendations = recommender.recommend(2, 3);
					
		         for (RecommendedItem recommendation : recommendations) {
		            System.out.println(recommendation);
		         }
		      
		      }catch(Exception e){}
		      
		   }*/
		  
}
