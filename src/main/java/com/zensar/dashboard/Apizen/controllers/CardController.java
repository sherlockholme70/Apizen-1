package com.zensar.dashboard.Apizen.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zensar.dashboard.Apizen.beans.card.CardBean;
import com.zensar.dashboard.Apizen.services.CardService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/CardService")
public class CardController {
	@Autowired
	CardService cardService;
	
	@PostMapping("/saveCard")
	public CardBean saveCard(@RequestBody() CardBean cardBean){
		System.out.println(cardBean);
		return this.cardService.updateSaveCard(cardBean);
	}
	
	@GetMapping("/getCard")
	public List<CardBean> getCards(){
		return this.cardService.getCards();
	}
	
	@GetMapping("/getCardByID")
	public CardBean getCardByID(@RequestParam String cardID){
		return this.cardService.getCardByID(cardID);
	}
	
	@PostMapping("/deleteCardByID")
	public boolean deleteCardByID(@RequestParam String cardID){
		return this.cardService.deletebyCardID(cardID);
	}
}
