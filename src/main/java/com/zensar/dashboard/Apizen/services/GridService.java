package com.zensar.dashboard.Apizen.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zensar.dashboard.Apizen.beans.GridBean;
import com.zensar.dashboard.Apizen.repositories.GridRepository;

@Service
public class GridService {

	@Autowired
	GridRepository gridRepository;

	public GridBean updateSaveGrid(GridBean gridBean) {	
		return gridRepository.save(gridBean);
	}

	public boolean deletebyGridID(String gridID) {
		return gridRepository.deleteByGridID(gridID);
	
	}

	public List<GridBean> getAllGrid() {
		return gridRepository.findAll();
	}

	public GridBean updateGridByGridID(GridBean gridBean) {
		return gridBean;	
	}

	public GridBean getGridByID(String gridID) {
		return gridRepository.findByGridID(gridID);	
	}

}
