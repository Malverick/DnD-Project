package com.DnD.Chars.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DnD.Chars.Entity.ClassEntity;

@Repository
public interface ClassRepository extends JpaRepository<ClassEntity, Integer> {

}
