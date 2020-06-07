package com.zensar.dashboard.Apizen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zensar.dashboard.Apizen.beans.DashboardBean;

@Repository
public interface DashboardBeanRepository extends JpaRepository<DashboardBean, String>{

	DashboardBean findByDashboardID(String dashboardID);

	
}
