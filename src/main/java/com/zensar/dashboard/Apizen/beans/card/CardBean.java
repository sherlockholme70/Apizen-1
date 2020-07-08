package com.zensar.dashboard.Apizen.beans.card;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.zensar.dashboard.Apizen.beans.card.component.CardComponentBean;
import com.zensar.dashboard.Apizen.beans.card.configurations.CardConfigurationBean;
import com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator;

@Entity(name="card_details")
public class CardBean {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="card_sequence")
	@GenericGenerator(
			name="card_sequence",
			strategy="com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator",
			parameters={
					@Parameter(name=ApizenSequenceGenerator.INCREMENT_PARAM,value="1"),
					@Parameter(name=ApizenSequenceGenerator.VALUE_PREFIX_PARAMETER, value="card"),
					@Parameter(name=ApizenSequenceGenerator.NUMBER_FORMAT_PARAMETER, value="%d")
			}
			)
	@Column(name="card_id")
	private String cardID;
		
	@Column(name="card_name")
	private String cardName;
	
	@Column(name="position")
	private int position;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="configuration_id")
	private CardConfigurationBean cardConfigurationBean;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="component_id")
	private CardComponentBean cardComponentBean;
	
	@Column(name="dashboard_id")
	private String dashbardID;
	
	public String getCardID() {
		return cardID;
	}

	public void setCardID(String cardID) {
		this.cardID = cardID;
	}

	public String getCardName() {
		return cardName;
	}

	public void setCardName(String cardName) {
		this.cardName = cardName;
	}

	public int getPosition() {
		return position;
	}

	public void setPosition(int position) {
		this.position = position;
	}

	public CardConfigurationBean getCardConfigurationBean() {
		return cardConfigurationBean;
	}

	public void setCardConfigurationBean(CardConfigurationBean cardConfigurationBean) {
		this.cardConfigurationBean = cardConfigurationBean;
	}

	public CardComponentBean getCardComponentBean() {
		return cardComponentBean;
	}

	public void setCardComponentBean(CardComponentBean cardComponentBean) {
		this.cardComponentBean = cardComponentBean;
	}

	public String getDashbardID() {
		return dashbardID;
	}

	public void setDashbardID(String dashbardID) {
		this.dashbardID = dashbardID;
	}

	@Override
	public String toString() {
		return "CardBean [cardID=" + cardID + ", cardName=" + cardName + ", position=" + position
				+ ", cardConfigurationBean=" + cardConfigurationBean + ", cardComponentBean=" + cardComponentBean
				+ ", dashbardID=" + dashbardID + "]";
	}

	
	
}
