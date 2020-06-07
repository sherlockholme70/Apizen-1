package com.zensar.dashboard.Apizen.beans.card.component.charts;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonTypeName;

@Entity(name="bar_chart")
@JsonTypeName("bar")
public class BarChartBean extends ChartBean {
	
}
