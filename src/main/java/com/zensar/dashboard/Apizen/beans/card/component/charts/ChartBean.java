package com.zensar.dashboard.Apizen.beans.card.component.charts;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.zensar.dashboard.Apizen.beans.card.component.CardComponentBean;
import com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator;

@Table(name="chart")
@Inheritance(strategy=InheritanceType.JOINED)
@JsonTypeName("chart")
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
	@Type(value= BarChartBean.class, name= "bar"), 
	@Type(value= DonutChart.class, name= "donut"),
	@Type(value= LineChartBean.class, name= "line"),
	@Type(value= PieChartBean.class, name= "pie")
})
public abstract class ChartBean extends CardComponentBean{
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="chart_sequence")
	@GenericGenerator(
			name="chart_sequence",
			strategy="com.zensar.dashboard.Apizen.persistence.ApizenSequenceGenerator",
			parameters={
					@Parameter(name=ApizenSequenceGenerator.INCREMENT_PARAM,value="1"),
					@Parameter(name=ApizenSequenceGenerator.VALUE_PREFIX_PARAMETER, value="chart"),
					@Parameter(name=ApizenSequenceGenerator.NUMBER_FORMAT_PARAMETER, value="%d")
			}
			)
	@Column(name="chart_id")
	private String chartID;
	
	@Column(name="chart_type")
	private String chartType;
	
	public String getChartID() {
		return chartID;
	}

	public void setChartID(String chartID) {
		this.chartID = chartID;
	}

	public String getChartType() {
		return chartType;
	}

	public void setChartType(String chartType) {
		this.chartType = chartType;
	}
}