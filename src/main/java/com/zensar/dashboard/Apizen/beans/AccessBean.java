package com.zensar.dashboard.Apizen.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="dashboard_access_details")
public class AccessBean {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="dashboard_id")
	private String dashboardId;
	@Column(name="username")
	private String username;
	@Column(name="access_provider")
	private String accessProvider;
	
	public String getDashboardId() {
		return dashboardId;
	}
	public void setDashboardId(String dashboardId) {
		this.dashboardId = dashboardId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAccessProvider() {
		return accessProvider;
	}
	public void setAccessProvider(String accessProvider) {
		this.accessProvider = accessProvider;
	}
	@Override
	public String toString() {
		return "AccessBean [dashboardId=" + dashboardId + ", username=" + username + ", acessProvider=" + accessProvider
				+ "]";
	}	
}
