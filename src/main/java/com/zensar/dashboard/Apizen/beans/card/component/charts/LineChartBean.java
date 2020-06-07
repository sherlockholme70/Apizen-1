package com.zensar.dashboard.Apizen.beans.card.component.charts;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonTypeName;

@Entity(name="line_chart")
@JsonTypeName("line")
public class LineChartBean extends ChartBean {
}