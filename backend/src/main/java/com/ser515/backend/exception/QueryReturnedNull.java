package com.ser515.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;
import java.util.Arrays;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class QueryReturnedNull extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 1L;
    private String searchEntity;
    private Object[] searchCriteria;

    public QueryReturnedNull(String searchEntity, Object... searchCriteria) {
        super(String.format("%s not found with search criteria %s", searchEntity, Arrays.toString(searchCriteria)));
        this.searchEntity = searchEntity;
        this.searchCriteria = searchCriteria;
    }

    public String getSearchEntity() {
        return searchEntity;
    }

    public Object[] getSearchCriteria() {
        return searchCriteria;
    }
}

