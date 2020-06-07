package com.zensar.dashboard.Apizen.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zensar.dashboard.Apizen.beans.DashboardBean;
import com.zensar.dashboard.Apizen.beans.GridBean;
import com.zensar.dashboard.Apizen.beans.card.CardBean;
import com.zensar.dashboard.Apizen.beans.card.component.NotificationBean;
import com.zensar.dashboard.Apizen.beans.card.component.NotificationThresholdConfiguration;
import com.zensar.dashboard.Apizen.beans.card.configurations.APIConfigurationBean;
import com.zensar.dashboard.Apizen.beans.card.configurations.HeaderBean;
import com.zensar.dashboard.Apizen.beans.card.configurations.QueryParameterBean;
import com.zensar.dashboard.Apizen.services.DashboardService;
import com.zensar.dashboard.Apizen.services.GridService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/DashboardService")
public class DashboardController {

	@Autowired
	DashboardService dashboardService;
	
	@Autowired
	GridService gridService;

	@GetMapping("/test")
	public void saveDashboardConfiguration() {
		
		// Dashboard bean
		DashboardBean dashboardBean = new DashboardBean();

		// Grid bean
		GridBean gridBean= new GridBean();
	
		// List of Card form a Grid bean
		ArrayList<CardBean> cardBeans=new ArrayList<>();

		// Initiation of 1 Card
		CardBean cardBean= new CardBean();
		//cardBean.setCardID(101);
		cardBean.setCardName("Card 1");
		cardBean.setPosition(1);

		// Initiation of  CardComponent under a Card
		NotificationBean notificationBean = new NotificationBean();
		notificationBean.setComponentType("notification");
		notificationBean.setMessage("Dummy Message");
		notificationBean.setXpath("xpath");
		List<NotificationThresholdConfiguration> notificationThresholdConfigurations = new ArrayList<>();
		NotificationThresholdConfiguration notificationThresholdConfiguration=new NotificationThresholdConfiguration();
		notificationThresholdConfiguration.setColorCode("#FFFFFF");
		notificationThresholdConfiguration.setOperator("<");
		notificationThresholdConfiguration.setValue("100");
		notificationThresholdConfigurations.add(notificationThresholdConfiguration);
		notificationBean.setNotificationThresholdConfigurations(notificationThresholdConfigurations);

		cardBean.setCardComponentBean(notificationBean);

		// Initiation of  APIConfigurationBean under a Card
		APIConfigurationBean apiConfigurationBean= new APIConfigurationBean();
		
		apiConfigurationBean.setUrl("https://");
		apiConfigurationBean.setThreshold(120);

		// Initiation of  HeaderMap under a apiConfigurationBean
		List<HeaderBean> headerMap= new ArrayList<HeaderBean>();
		HeaderBean headerBean= new HeaderBean();
		headerBean.setKey("Key");
		headerBean.setValue("Value");
		headerMap.add(headerBean);
		apiConfigurationBean.setHeadersMap(headerMap);

		// Initiation of  QueryMap under a apiConfigurationBean
		List<QueryParameterBean> queryMap= new ArrayList<QueryParameterBean>();
		QueryParameterBean queryParameterBean= new QueryParameterBean();
		queryParameterBean.setKey("key");
		queryParameterBean.setValue("value");
		queryMap.add(queryParameterBean);
		apiConfigurationBean.setQueryParameters(queryMap);


		cardBean.setCardConfigurationBean(apiConfigurationBean);
		cardBeans.add(cardBean);

		dashboardBean.setCreateDate(new Date());
		dashboardBean.setDashboardName("Dashboard 1");

		gridBean.setCards(cardBeans);
		dashboardBean.setGridBean(gridBean);

		dashboardService.updateSaveDashboard(dashboardBean);
	}
	
	@GetMapping("/getDashboards")
	public List<DashboardBean> getDashboards(){
		return this.dashboardService.getDashboards();
	}
	
	@GetMapping("/getDashboard/{dashboardID}")
	public DashboardBean getDashboard(@PathVariable String dashboardID){
		return this.dashboardService.getDashboard(dashboardID);
	}
	
	@PostMapping("/saveDashboard")
	public DashboardBean saveDashboardBean(@RequestBody DashboardBean dashboardBean){
		return this.dashboardService.updateSaveDashboard(dashboardBean);
	}
}
