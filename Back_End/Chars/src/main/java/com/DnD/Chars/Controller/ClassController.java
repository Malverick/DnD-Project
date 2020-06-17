package com.DnD.Chars.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.DnD.Chars.Entity.ClassEntity;
import com.DnD.Chars.Service.ClassService;

@Controller
public class ClassController {

	private ClassService classService;
	
	private ClassController (@Autowired ClassService classService) {
		this.classService = classService;
	}
	
    @GetMapping(path = "/get/class/all")
    public ResponseEntity<List<ClassEntity>> getAllClasses() {
        return new ResponseEntity<>(classService.getAllClasses(), HttpStatus.OK);
    }
	
}
