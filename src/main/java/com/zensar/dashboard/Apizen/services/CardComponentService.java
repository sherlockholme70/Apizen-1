package com.zensar.dashboard.Apizen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zensar.dashboard.Apizen.beans.card.component.CardComponentBean;
import com.zensar.dashboard.Apizen.repositories.CardComponentBeanRepository;

@Service
public class CardComponentService {
	
	@Autowired
	CardComponentBeanRepository cardComponentBeanRepository;
	
	public CardComponentBean getCardComponent(String componentID) {
		return cardComponentBeanRepository.findByComponentID(componentID);
	}
	
	public CardComponentBean updateSaveCardComponent(CardComponentBean cardComponentBean) {	
		return cardComponentBeanRepository.save(cardComponentBean);
	}
	
	public void deleteCardComponent(String cardID) {
		cardComponentBeanRepository.deleteById(cardID);
	}
}
