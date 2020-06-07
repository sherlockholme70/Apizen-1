package com.zensar.dashboard.Apizen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zensar.dashboard.Apizen.beans.card.configurations.CardConfigurationBean;

public interface CardConfigurationRepository extends JpaRepository<CardConfigurationBean, String> {

}
