package com.pizza.backpizza.util;

import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class EnviarEmail {

	public static void enviarEmail(String email) {
	
		
	
		
		
		
		
		
		
		
		
		
		
		
		
		  Properties prop = new Properties();
		    /** Parâmetros de conexão com servidor Gmail */
			 prop.put ("mail.smtp.host", "smtp.gmail.com");

			    prop.put("mail.smtp.auth", "true");
			    prop.put("mail.debug", "true");
			    prop.put("mail.smtp.debug", "true");
			    prop.put("mail.mime.charset", "ISO-8859-1");
			        prop.put("mail.smtp.port", "465");
			        prop.put ("mail.smtp.starttls.enable", "true");
			        prop.put ("mail.smtp.socketFactory.port", "465");
			        prop.put ("mail.smtp.socketFactory.fallback", "false");
			        prop.put ("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		 
		    Session session = Session.getDefaultInstance(prop, new javax.mail.Authenticator() {
		           protected PasswordAuthentication getPasswordAuthentication() 
		           {
		                 return new PasswordAuthentication("adm.pizza100@gmail.com", 
		                 "xZQtCR5bqweLT9h");
		           }
		      });
		 
		    /** Ativa Debug para sessão */
		    session.setDebug(true);
		 
		    try {
		 
		      Message message = new MimeMessage(session);
		      message.setFrom(new InternetAddress("adm.pizza100@gmail.com")); 
		      //Remetente
		 
		      Address[] toUser = InternetAddress //Destinatário(s)
		                 .parse("lucaspadilhadamata@gmail.com");  
		 
		      message.setRecipients(Message.RecipientType.TO, toUser);
		      message.setSubject("Adminitrapizza Redefinição de senha");//Assunto
		      message.setText("para redefinir senha acesse o o link: http://localhost:3000/trocasenha");
		      /**Método para enviar a mensagem criada*/
		      Transport.send(message);
		 
		      System.out.println("Feito!!!");
		 
		     } catch (MessagingException e) {
		        throw new RuntimeException(e);
		    }
		
	}
}
