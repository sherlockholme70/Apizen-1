package com.zensar.dashboard.Apizen.beans.card.configurations;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonTypeName;

@Entity(name="card_api_configurations")
@JsonTypeName("api")
public class APIConfigurationBean extends CardConfigurationBean{
	
	@Column(name="url")
	private String url;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="configuration_id")
	private List<HeaderBean> headerBeanMap;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="configuration_id")
	private List<QueryParameterBean> queryParameterBeanMap;
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public List<HeaderBean> getHeadersMap() {
		return headerBeanMap;
	}
	public void setHeadersMap(List<HeaderBean> headerBeanMap) {
		this.headerBeanMap = headerBeanMap;
	}
	public List<QueryParameterBean> getQueryParameters() {
		return queryParameterBeanMap;
	}
	public void setQueryParameters(List<QueryParameterBean> queryParameterBeanMap) {
		this.queryParameterBeanMap = queryParameterBeanMap;
	}
	
}
