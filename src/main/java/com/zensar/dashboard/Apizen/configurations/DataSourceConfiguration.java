package com.zensar.dashboard.Apizen.configurations;


import java.sql.Connection;
import java.sql.SQLException;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;

import com.zensar.dashboard.Apizen.beans.card.configurations.DbConfigurationBean;

@Configuration
public class DataSourceConfiguration {

@Lazy
@Bean
public String testConnection(DbConfigurationBean databaseConfigurationBean) {
	String catlog = null;
	DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
	dataSourceBuilder.driverClassName("com.mysql.cj.jdbc.Driver");
	dataSourceBuilder.url(databaseConfigurationBean.getSchemaName());
	dataSourceBuilder.username(databaseConfigurationBean.getDatabaseUserName());
	dataSourceBuilder.password(databaseConfigurationBean.getDatabasePassword().trim());
	try {
		Connection connection =  dataSourceBuilder.build().getConnection();
		catlog = connection.getCatalog();
		connection.close();
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	System.out.println("catlog : "+catlog);
	return catlog;
	
}
}
