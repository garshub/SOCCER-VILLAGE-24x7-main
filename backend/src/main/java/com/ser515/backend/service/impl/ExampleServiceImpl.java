package com.ser515.backend.service.impl;

import com.ser515.backend.exception.ResouceNotFoundException;
import com.ser515.backend.model.Example;
import com.ser515.backend.repository.ExampleRepository;
import com.ser515.backend.service.ExampleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExampleServiceImpl implements ExampleService {

    private ExampleRepository exampleRepository;

    public ExampleServiceImpl(ExampleRepository exampleRepository) {
        super();
        this.exampleRepository = exampleRepository;
    }

    @Override
    public Example saveExample(Example example) {
        return exampleRepository.save(example);
    }

    @Override
    public List<Example> getAllExamples() {
        return exampleRepository.findAll();
    }

    @Override
    public Example getExampleById(long id) {
        return exampleRepository.findById(id).orElseThrow(() ->
                new ResouceNotFoundException("Example", "id", id));
    }

    @Override
    public Example updateExample(Example example, long id) {
        Example existingExample = exampleRepository.findById(id).orElseThrow(
                () -> new ResouceNotFoundException("Example", "id", id));
        existingExample.setFirstName(example.getFirstName());
        existingExample.setLastName(example.getLastName());
        existingExample.setEmail(example.getEmail());
        exampleRepository.save(existingExample);
        return existingExample;
    }

    @Override
    public void deleteExample(long id) {
        exampleRepository.findById(id).orElseThrow(
                () -> new ResouceNotFoundException("Example", "id", id));
        exampleRepository.deleteById(id);
    }
}
