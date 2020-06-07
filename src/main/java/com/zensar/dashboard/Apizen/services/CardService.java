package com.zensar.dashboard.Apizen.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zensar.dashboard.Apizen.beans.card.CardBean;
import com.zensar.dashboard.Apizen.repositories.CardBeanRepository;

@Service
public class CardService {

	@Autowired
	CardBeanRepository cardBeanRepository;
	
	public CardBean updateSaveCard(CardBean cardBean) {	
		return cardBeanRepository.save(cardBean);
	}

	public boolean deletebyCardID(String gridID) {
		return cardBeanRepository.deleteByCardID(gridID);
	}

	public List<CardBean> getCards() {
		return cardBeanRepository.findAll();
	}

	public CardBean updateCardByCardID(CardBean cardBean) {
		return cardBean;	
	}

	public CardBean getCardByID(String cardID) {
		return cardBeanRepository.findByCardID(cardID);
	}
}
