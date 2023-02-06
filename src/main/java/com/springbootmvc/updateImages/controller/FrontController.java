package com.springbootmvc.updateImages.controller;

import com.springbootmvc.updateImages.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontController {

    @Autowired
    private StorageService storageService;


    @GetMapping
    public String getViewDragAndDrop() {

        return "ViewDragAndDrop";
    }

}
