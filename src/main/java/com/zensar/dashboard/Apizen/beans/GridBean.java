package com.zensar.dashboard.Apizen.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.zensar.dashboard.Apizen.beans.card.CardBean;
import com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator;

@Entity(name="grid_configurations")
public class GridBean {
	
	@Id
	@Column(name="grid_id")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="grid_sequence")
	@GenericGenerator(
			name="grid_sequence",
			strategy="com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator",
			parameters={
					@Parameter(name=ApizenSequenceGenerator.INCREMENT_PARAM,value="1"),
					@Parameter(name=ApizenSequenceGenerator.VALUE_PREFIX_PARAMETER, value="grid"),
					@Parameter(name=ApizenSequenceGenerator.NUMBER_FORMAT_PARAMETER, value="%d")
			}
			)
	private String gridID;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="grid_id")		
	private List<CardBean> cards;

	public List<CardBean> getCards() {
		return cards;
	}

	public void setCards(List<CardBean> cards) {
		this.cards = cards;
	}

	public String getGridID() {
		return gridID;
	}

	public void setGridID(String gridID) {
		this.gridID = gridID;
	}
	
	

	
	

}
