package com.ser515.backend.repository;

import com.ser515.backend.model.Example;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExampleRepository extends JpaRepository<Example, Long> {
}
