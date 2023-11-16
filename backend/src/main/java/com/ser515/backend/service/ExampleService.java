package com.ser515.backend.service;

import com.ser515.backend.model.Example;

import java.util.List;

public interface ExampleService {
    Example saveExample(Example example);

    List<Example> getAllExamples();

    Example getExampleById(long id);

    Example updateExample(Example example, long id);

    void deleteExample(long id);
}
