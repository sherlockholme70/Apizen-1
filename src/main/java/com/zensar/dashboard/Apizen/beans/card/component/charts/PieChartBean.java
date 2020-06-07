package com.zensar.dashboard.Apizen.beans.card.component.charts;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonTypeName;

@Entity(name="pie_chart")
@JsonTypeName("pie")
public class PieChartBean extends ChartBean {
}