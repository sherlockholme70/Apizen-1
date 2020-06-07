package com.zensar.dashboard.Apizen.beans.card.configurations;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonTypeName;

@Entity(name="DATABASE_CONFIGURATION")
@JsonTypeName("database")
public class DatabaseConfigurationBean extends CardConfigurationBean{
	
	private String databaseType;
	private String databaseName;
	private String schemaName;
	private String databasePassword;
	
	
	public String getDatabaseType() {
		return databaseType;
	}
	public void setDatabaseType(String databaseType) {
		this.databaseType = databaseType;
	}
	public String getDatabaseName() {
		return databaseName;
	}
	public void setDatabaseName(String databaseName) {
		this.databaseName = databaseName;
	}
	public String getSchemaName() {
		return schemaName;
	}
	public void setSchemaName(String schemaName) {
		this.schemaName = schemaName;
	}
	public String getDatabasePassword() {
		return databasePassword;
	}
	public void setDatabasePassword(String databasePassword) {
		this.databasePassword = databasePassword;
	}
	
	
}
