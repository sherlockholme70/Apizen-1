export class CardComponentBean {
    componentID?: String;
    type?: String;
    chartType?: String;
}

export class NotificationThresholdConfigurationBean {
    notificationThresholdConfigurationID?: String;
    operator?: String;
    value?: String;
    colorCode?: String;
}

export class NotificationBean extends CardComponentBean {
    message?: String;
    xpath?: String;
    notificationThresholdConfiguration?: NotificationThresholdConfigurationBean[];
}

export class MapBean extends CardComponentBean {

}

export class TableBean extends CardComponentBean {

}

export class ChartBean extends CardComponentBean {
    chartID?: String;
    animations: boolean;
    legend: boolean;
    legendTitle: String;
}

export class BarChartBean extends ChartBean {
    legendPosition: String;
    xAxis: boolean;
    yAxis: boolean;
    showGridLines: boolean;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: String;
    yAxisLabel: String;
    gradient: boolean;
    results: any;
}

export class LineChartBean extends ChartBean {
    legendPosition: String;
    xAxis: boolean;
    yAxis: boolean;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: String;
    yAxisLabel: String;
    showDataLabel: boolean;
    gradient: boolean;
    results: any;
    autoscale: boolean;
}

export class PieChartBean extends ChartBean {
    legendPosition: String;
    labels: boolean;
    explodeSlices: boolean;
    gradient: boolean;
    results: any;
}

export class DoughnutChartBean extends PieChartBean {
    arcWidth: number;
    doughnut: boolean;
}

export class SingleSeriesData {
    key: String;
    value: number;
}

export class MultipleSeriesData {
    key: String;
    values: SingleSeriesData[];
}
