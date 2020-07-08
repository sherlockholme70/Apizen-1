package com.zensar.dashboard.Apizen.beans.card.configurations;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator;

@Entity(name="card_configurations")
@Inheritance(strategy=InheritanceType.JOINED)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
	@Type(value= APIConfigurationBean.class, name= "api"), 
	@Type(value= DatabaseConfigurationBean.class, name= "database")	
})
public abstract class CardConfigurationBean {
 
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="configuration_sequence")
	@GenericGenerator(
			name="configuration_sequence",
			strategy="com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator",
			parameters={
					@Parameter(name=ApizenSequenceGenerator.INCREMENT_PARAM,value="1"),
					@Parameter(name=ApizenSequenceGenerator.VALUE_PREFIX_PARAMETER, value="configuration"),
					@Parameter(name=ApizenSequenceGenerator.NUMBER_FORMAT_PARAMETER, value="%d")
			}
			)
	@Column(name="configuration_id")
	private String configurationID;
		
	@Column(name="threshold")
	private int threshold;

	public String getConfigurationID() {
		return configurationID;
	}

	public void setConfigurationID(String configurationID) {
		this.configurationID = configurationID;
	}

	public int getThreshold() {
		return threshold;
	}
 
	public void setThreshold(int threshold) {
		this.threshold = threshold;
	}

	@Override
	public String toString() {
		return "CardConfigurationBean [configurationID=" + configurationID + ", threshold=" + threshold + "]";
	}
	
	
	
		
}
