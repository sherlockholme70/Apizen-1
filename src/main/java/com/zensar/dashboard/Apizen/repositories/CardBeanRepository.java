package com.zensar.dashboard.Apizen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zensar.dashboard.Apizen.beans.card.CardBean;

@Repository
public interface CardBeanRepository extends JpaRepository<CardBean, String> {
	
    public CardBean findByCardID(String cardID);
	
	public boolean deleteByCardID(String cardID);
}
