package com.DnD.Chars.Entity;

import javax.persistence.*;

@Entity
@Table(name = "classes")
public class ClassEntity {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column
	private String name;
	
	@Column
	private String hitDice;
	
	@Column
	private String armorProf;
	
	@Column
	private String weaponProf;
	
	@Column
	private String toolProf;
	
	@Column
	private String savingThrows;
	
	@Column
	private String skillChoices;
	
	@Column
	private String equiptmentOption1a;
	
	@Column
	private String equiptmentOption1b;
	
	@Column
	private String equiptmentOption2a;
	
	@Column
	private String equiptmentOption2b;
	
	@Column
	private String equiptmentOption3a;
	
	@Column
	private String equiptmentOption3b;
	
	@Column
	private String startinbAbility1;
	
	@Column
	private String startinbAbility2;
	
	@Column
	private String startingAbility3;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getHitDice() {
		return hitDice;
	}

	public void setHitDice(String hitDice) {
		this.hitDice = hitDice;
	}

	public String getArmorProf() {
		return armorProf;
	}

	public void setArmorProf(String armorProf) {
		this.armorProf = armorProf;
	}

	public String getWeaponProf() {
		return weaponProf;
	}

	public void setWeaponProf(String weaponProf) {
		this.weaponProf = weaponProf;
	}

	public String getToolProf() {
		return toolProf;
	}

	public void setToolProf(String toolProf) {
		this.toolProf = toolProf;
	}

	public String getSavingThrows() {
		return savingThrows;
	}

	public void setSavingThrows(String savingThrows) {
		this.savingThrows = savingThrows;
	}

	public String getSkillChoices() {
		return skillChoices;
	}

	public void setSkillChoices(String skillChoices) {
		this.skillChoices = skillChoices;
	}

	public String getEquiptmentOption1a() {
		return equiptmentOption1a;
	}

	public void setEquiptmentOption1a(String equiptmentOption1a) {
		this.equiptmentOption1a = equiptmentOption1a;
	}

	public String getEquiptmentOption1b() {
		return equiptmentOption1b;
	}

	public void setEquiptmentOption1b(String equiptmentOption1b) {
		this.equiptmentOption1b = equiptmentOption1b;
	}

	public String getEquiptmentOption2a() {
		return equiptmentOption2a;
	}

	public void setEquiptmentOption2a(String equiptmentOption2a) {
		this.equiptmentOption2a = equiptmentOption2a;
	}

	public String getEquiptmentOption2b() {
		return equiptmentOption2b;
	}

	public void setEquiptmentOption2b(String equiptmentOption2b) {
		this.equiptmentOption2b = equiptmentOption2b;
	}

	public String getEquiptmentOption3a() {
		return equiptmentOption3a;
	}

	public void setEquiptmentOption3a(String equiptmentOption3a) {
		this.equiptmentOption3a = equiptmentOption3a;
	}

	public String getEquiptmentOption3b() {
		return equiptmentOption3b;
	}

	public void setEquiptmentOption3b(String equiptmentOption3b) {
		this.equiptmentOption3b = equiptmentOption3b;
	}

	public String getStartinbAbility1() {
		return startinbAbility1;
	}

	public void setStartinbAbility1(String startinbAbility1) {
		this.startinbAbility1 = startinbAbility1;
	}

	public String getStartinbAbility2() {
		return startinbAbility2;
	}

	public void setStartinbAbility2(String startinbAbility2) {
		this.startinbAbility2 = startinbAbility2;
	}

	public String getStartingAbility3() {
		return startingAbility3;
	}

	public void setStartingAbility3(String startingAbility3) {
		this.startingAbility3 = startingAbility3;
	}
	
}
