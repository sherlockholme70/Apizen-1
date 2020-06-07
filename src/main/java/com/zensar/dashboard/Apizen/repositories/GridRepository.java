package com.zensar.dashboard.Apizen.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zensar.dashboard.Apizen.beans.GridBean;

@Repository
public interface GridRepository extends JpaRepository<GridBean, String> {
	
	public GridBean findByGridID(String gridID);
	
	public boolean deleteByGridID(String gridID);
}
