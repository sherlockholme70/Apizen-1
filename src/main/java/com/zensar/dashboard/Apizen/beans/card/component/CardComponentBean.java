package com.zensar.dashboard.Apizen.beans.card.component;

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
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.zensar.dashboard.Apizen.beans.card.component.charts.ChartBean;
import com.zensar.dashboard.Apizen.beans.card.configurations.APIConfigurationBean;
import com.zensar.dashboard.Apizen.beans.card.configurations.DatabaseConfigurationBean;
import com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator;

@Entity(name="card_component")
@Inheritance(strategy=InheritanceType.JOINED)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
	@Type(value= NotificationBean.class, name= "notification"), 
	@Type(value= TableBean.class, name= "table"),
	@Type(value= MapBean.class, name= "map"),
	@Type(value= ChartBean.class, name= "chart")
})
public abstract class CardComponentBean {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="component_sequence")
	@GenericGenerator(
			name="component_sequence",
			strategy="com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator",
			parameters={
					@Parameter(name=ApizenSequenceGenerator.INCREMENT_PARAM,value="1"),
					@Parameter(name=ApizenSequenceGenerator.VALUE_PREFIX_PARAMETER, value="component"),
					@Parameter(name=ApizenSequenceGenerator.NUMBER_FORMAT_PARAMETER, value="%d")
			}
			)
	@Column(name="component_id")
	private String componentID;
	
	@Column(name="component_type")
	private String componentType;

	public String getComponentID() {
		return componentID;
	}

	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}

	public String getComponentType() {
		return componentType;
	}

	public void setComponentType(String componentType) {
		this.componentType = componentType;
	}
		
}
