package com.zensar.dashboard.Apizen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zensar.dashboard.Apizen.beans.card.configurations.DatabaseConfigurationBean;
import com.zensar.dashboard.Apizen.beans.card.configurations.DbConfigurationBean;
import com.zensar.dashboard.Apizen.services.DatabaseRequestResponseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/DatabaseService")
public class DatabaseRequestResponseController {
	
	@Autowired
	DatabaseRequestResponseService databaseRequestResponseService;
	
	@GetMapping("/test")
	public String test() {
		return "test";
	}
 	
	@PostMapping("/getDatabaseResponse")
	public Boolean getDatabaseResponse(@RequestBody DbConfigurationBean dbConfigurationBean) { 
		System.out.println("Database call");
		
//		System.out.println("OBJECT : "+ dbConfigurationBean);
		String response = databaseRequestResponseService.testConnection(dbConfigurationBean);
		System.out.println("Res : "+response);
		if (response != null) {
			return true;
		}else {
			return false;
		}
	}
}

