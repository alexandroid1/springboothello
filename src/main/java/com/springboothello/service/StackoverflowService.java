package com.springboothello.service;

import com.springboothello.model.StackoverflowWebSite;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Александр on 20.10.2017.
 */
@Service
public class StackoverflowService {

    private static List<StackoverflowWebSite> items = new ArrayList<>();

    public List<StackoverflowWebSite> findAll() {
        return null;
    }
}
