package com.zensar.dashboard.Apizen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zensar.dashboard.Apizen.beans.card.configurations.APIConfigurationBean;
import com.zensar.dashboard.Apizen.services.APIRequestResponseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/APIService")
//@CrossOrigin(origins="https://localhost:4200")
public class APIRequestResponseController {

	@Autowired
	APIRequestResponseService apiRequestResponseService;
	
	@GetMapping("/test")
	public String test() {
		return "test";
	}
	@PostMapping("/getAPIResponse")
	public String getAPIResponse(@RequestBody APIConfigurationBean apiConfigurationBean) {
		return this.apiRequestResponseService.getAPIResponse(apiConfigurationBean);
	}
}
