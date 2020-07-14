package com.zensar.dashboard.Apizen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zensar.dashboard.Apizen.beans.card.configurations.DbConfigurationBean;
import com.zensar.dashboard.Apizen.configurations.DataSourceConfiguration;

@Service
public class DatabaseRequestResponseService {
	@Autowired
	DataSourceConfiguration dataSourceConfiguration;
	
	public String testConnection(DbConfigurationBean dbConfigurationBean) {
		return dataSourceConfiguration.testConnection(dbConfigurationBean);
	}
}
