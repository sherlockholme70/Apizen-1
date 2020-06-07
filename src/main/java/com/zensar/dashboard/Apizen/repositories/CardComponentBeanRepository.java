package com.zensar.dashboard.Apizen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zensar.dashboard.Apizen.beans.card.component.CardComponentBean;

@Repository
public interface CardComponentBeanRepository extends JpaRepository<CardComponentBean, String> {

	public CardComponentBean findByComponentID(String componentID);
	
	
	public boolean deleteByComponentID(String componentID);
	
}
