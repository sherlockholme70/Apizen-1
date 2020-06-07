package com.zensar.dashboard.Apizen.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zensar.dashboard.Apizen.beans.DashboardBean;
import com.zensar.dashboard.Apizen.repositories.DashboardBeanRepository;

@Service
public class DashboardService {
	
	@Autowired
	DashboardBeanRepository dashboardBeanRepository;
	
	/*public DashboardBean getDashboard(String dashboardID) {
		return dashboardBeanRepository.findByDashboardID(dashboardID);
	}*/
	
	public DashboardBean updateSaveDashboard(DashboardBean dashboardBean) {	
		return dashboardBeanRepository.save(dashboardBean);
	}
	
	public void deleteDashboard(String dashboardID) {
		dashboardBeanRepository.deleteById(dashboardID);
	}

	public List<DashboardBean> getDashboards() {
		return dashboardBeanRepository.findAll();
	}

	public DashboardBean getDashboard(String dashboardID) {
		return dashboardBeanRepository.findByDashboardID(dashboardID);
	}
	
}
