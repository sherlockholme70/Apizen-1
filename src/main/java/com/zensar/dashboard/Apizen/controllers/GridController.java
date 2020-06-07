package com.zensar.dashboard.Apizen.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zensar.dashboard.Apizen.beans.GridBean;
import com.zensar.dashboard.Apizen.services.GridService;

@CrossOrigin(origins="*")
@RestController
public class GridController {

	@Autowired
	GridService gridService;
	
	@PostMapping("/saveGrid")
	public GridBean saveGrid(@RequestBody GridBean gridBean){
		return this.gridService.updateSaveGrid(gridBean);
	}
	
	@GetMapping("/getGrid")
	public List<GridBean> getAllGrid(){
		return this.gridService.getAllGrid();
	}
	
	@GetMapping("/getGridByID")
	public List<GridBean> getGridByID(@RequestParam String gridID){
		return this.gridService.getAllGrid();
	}
	
	@PostMapping("/deleteGridByID")
	public boolean deleteGridByID(@RequestParam String gridID){
		return this.gridService.deletebyGridID(gridID);
	}
}
