package com.zensar.dashboard.Apizen.beans.card.configurations;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator;

@Entity(name="query_parameters")
public class QueryParameterBean {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="query_parameter_sequence")
	@GenericGenerator(
			name="query_parameter_sequence",
			strategy="com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator",
			parameters={
					@Parameter(name=ApizenSequenceGenerator.INCREMENT_PARAM,value="1"),
					@Parameter(name=ApizenSequenceGenerator.VALUE_PREFIX_PARAMETER, value="QueryParameter"),
					@Parameter(name=ApizenSequenceGenerator.NUMBER_FORMAT_PARAMETER, value="%d")
			}
			)
	@Column(name="query_parameter_id")
	private String id;
	@Column(name="query_parameter_key")
	private String key;
	@Column(name="query_parameter_value")
	private String value;
	@Column(name="configuration_id")
	private String configurationID;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public String getConfigurationID() {
		return configurationID;
	}
	public void setConfigurationID(String configurationID) {
		this.configurationID = configurationID;
	}
	
}
