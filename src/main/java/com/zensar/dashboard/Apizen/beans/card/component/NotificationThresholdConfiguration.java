package com.zensar.dashboard.Apizen.beans.card.component;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator;

@Entity(name="notification_threshold_configuration")
public class NotificationThresholdConfiguration {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="notification_threshold_sequence")
	@GenericGenerator(
			name="notification_threshold_sequence",
			strategy="com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator",
			parameters={
					@Parameter(name=ApizenSequenceGenerator.INCREMENT_PARAM,value="1"),
					@Parameter(name=ApizenSequenceGenerator.VALUE_PREFIX_PARAMETER, value="notification_threshold"),
					@Parameter(name=ApizenSequenceGenerator.NUMBER_FORMAT_PARAMETER, value="%d")
			}
			)
	@Column(name="notification_threshold_id")
	private String notificationThresholdConfigurationID;

	@Column(name="operator")
	private String operator;

	@Column(name="value")
	private String value;

	@Column(name="color_code")
	private String colorCode;

	
	public String getNotificationThresholdConfigurationID() {
		return notificationThresholdConfigurationID;
	}

	public void setNotificationThresholdConfigurationID(String notificationThresholdConfigurationID) {
		this.notificationThresholdConfigurationID = notificationThresholdConfigurationID;
	}

	public String getOperator() {
		return operator;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getColorCode() {
		return colorCode;
	}

	public void setColorCode(String colorCode) {
		this.colorCode = colorCode;
	}

	@Override
	public String toString() {
		return "NotificationThresholdConfiguration [notificationThresholdConfigurationID="
				+ notificationThresholdConfigurationID + ", operator=" + operator + ", value=" + value + ", colorCode="
				+ colorCode + "]";
	}

	
}
