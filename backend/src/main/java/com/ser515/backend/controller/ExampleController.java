package com.ser515.backend.controller;

import com.ser515.backend.model.Example;
import com.ser515.backend.service.ExampleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/example")
public class ExampleController {
    private ExampleService exampleService;

    public ExampleController(ExampleService exampleService) {
        this.exampleService = exampleService;
    }

    @PostMapping
    public ResponseEntity<Example> saveExample(@RequestBody Example example) {
        return new ResponseEntity<Example>(exampleService.saveExample(example), HttpStatus.CREATED);
    }

    @GetMapping
    public List<Example> getAllExamples() {
        return exampleService.getAllExamples();
    }

    @GetMapping("{id}")
    public ResponseEntity<Example> getExampleById(@PathVariable("id") long exampleID) {
        return new ResponseEntity<Example>(exampleService.getExampleById(exampleID), HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Example> updateExample(@RequestBody Example example, @PathVariable("id") long idToUpdate) {
        return new ResponseEntity<Example>(exampleService.updateExample(example, idToUpdate), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteExample(@PathVariable long id) {
        exampleService.deleteExample(id);
        return new ResponseEntity<String>("Employee deleted successfully.", HttpStatus.OK);
    }

}
