package com.zensar.dashboard.Apizen.beans.card.configurations;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DbConfigurationBean {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String databaseType;
	private String databaseUserName;
	private String schemaName;
	private String databasePassword;
	

	public String getDatabaseType() {
		return databaseType;
	}
	public void setDatabaseType(String databaseType) {
		this.databaseType = databaseType;
	}
	public String getDatabaseUserName() {
		return databaseUserName;
	}
	public void setDatabaseUserName(String databaseUserName) {
		this.databaseUserName = databaseUserName;
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
	@Override
	public String toString() {
		return "DbConfigurationBean [id=" + id + ", databaseType=" + databaseType + ", databaseUserName="
				+ databaseUserName + ", schemaName=" + schemaName + ", databasePassword=" + databasePassword + "]";
	}

	
}
