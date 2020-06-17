package com.DnD.Chars.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DnD.Chars.Entity.ClassEntity;
import com.DnD.Chars.Repository.ClassRepository;

@Service
public class ClassService {

	private ClassRepository classRepository;
	
	private ClassService(@Autowired ClassRepository classRepository) {
		this.classRepository = classRepository;
	}
	
	public List<ClassEntity> getAllClasses() {
		List<ClassEntity> classes = (List<ClassEntity>) classRepository.findAll();
		return classes;
	}
	public Optional<ClassEntity> getClassByName(int id) {
		return classRepository.findById(id);
	}
}
