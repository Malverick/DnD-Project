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
	public ClassEntity addClass(ClassEntity classEntity) {
		classRepository.save(classEntity);
		return classEntity;
	}
	public Integer deleteClass(Integer id) {
		classRepository.deleteById(id);
		return id;
	}
	public Optional<ClassEntity> updateClass(Integer id, ClassEntity classEntity) {
		return classRepository.findById(id).map(updatedClassEntity -> {
			if (classEntity.getName() != null) { updatedClassEntity.setName(classEntity.getName());}
			if (classEntity.getHitDice() != null) { updatedClassEntity.setHitDice(classEntity.getHitDice());}
			if (classEntity.getArmorProf() != null) { updatedClassEntity.setArmorProf(classEntity.getArmorProf());}
			if (classEntity.getWeaponProf() != null) { updatedClassEntity.setWeaponProf(classEntity.getWeaponProf());}
			if (classEntity.getToolProf() != null) { updatedClassEntity.setToolProf(classEntity.getToolProf());}
			if (classEntity.getSavingThrows() != null) { updatedClassEntity.setSavingThrows(classEntity.getSavingThrows());}
			if (classEntity.getSkillChoices() != null) { updatedClassEntity.setSkillChoices(classEntity.getSkillChoices());}
			if (classEntity.getEquiptmentOption1a() != null) { updatedClassEntity.setEquiptmentOption1a(classEntity.getEquiptmentOption1a());}
			if (classEntity.getEquiptmentOption1b() != null) { updatedClassEntity.setEquiptmentOption1b(classEntity.getEquiptmentOption1b());}
			if (classEntity.getEquiptmentOption2a() != null) { updatedClassEntity.setEquiptmentOption2a(classEntity.getEquiptmentOption2a());}
			if (classEntity.getEquiptmentOption2b() != null) { updatedClassEntity.setEquiptmentOption2b(classEntity.getEquiptmentOption2b());}
			if (classEntity.getEquiptmentOption3a() != null) { updatedClassEntity.setEquiptmentOption3a(classEntity.getEquiptmentOption3a());}
			if (classEntity.getEquiptmentOption3b() != null) { updatedClassEntity.setEquiptmentOption3b(classEntity.getEquiptmentOption3b());}
			if (classEntity.getStartinbAbility1() != null) { updatedClassEntity.setStartinbAbility1(classEntity.getStartinbAbility1());}
			if (classEntity.getStartinbAbility2() != null) { updatedClassEntity.setStartinbAbility2(classEntity.getStartinbAbility2());}
			if (classEntity.getStartingAbility3() != null) { updatedClassEntity.setStartingAbility3(classEntity.getStartingAbility3());}
		return classRepository.save(updatedClassEntity);
		});

	}
}
