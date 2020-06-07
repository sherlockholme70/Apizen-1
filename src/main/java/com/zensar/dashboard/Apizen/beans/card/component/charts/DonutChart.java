package com.zensar.dashboard.Apizen.beans.card.component.charts;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonTypeName;

@Entity(name="donut_chart")
@JsonTypeName("donut")
public class DonutChart extends ChartBean {
}