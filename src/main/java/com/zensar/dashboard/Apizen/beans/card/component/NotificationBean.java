package com.zensar.dashboard.Apizen.beans.card.component;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonTypeName;

@Entity(name="notification")
@JsonTypeName("notification")
public class NotificationBean extends CardComponentBean{
		
	@Column(name="message")
	private String message;
	@Column(name="xpath")
	private String xpath;
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="component_id")
	private List<NotificationThresholdConfiguration>  notificationThresholdConfigurations ;
	
	public String getXpath() {
		return xpath;
	}
	public void setXpath(String xpath) {
		this.xpath = xpath;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public List<NotificationThresholdConfiguration> getNotificationThresholdConfigurations() {
		return notificationThresholdConfigurations;
	}
	public void setNotificationThresholdConfigurations(List<NotificationThresholdConfiguration> notificationThresholdConfigurations) {
		this.notificationThresholdConfigurations = notificationThresholdConfigurations;
	}
	
}
