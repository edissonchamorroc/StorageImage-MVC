package com.springbootmvc.updateImages.controller;

import com.springbootmvc.updateImages.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class StorageController {

    @Autowired
    StorageService storageService;


    @PostMapping(value = "/upload")
    public String postImage(@RequestParam(value = "image", required = false) MultipartFile image) {

        try {

            return this.storageService.uploadImage(image);

        } catch (Exception e) {

            throw new RuntimeException(e);
        }

    }

    @GetMapping(value = "/view/{fileName}", produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public ResponseEntity<?> viewImage(@PathVariable String fileName) {

        try {
            byte[] content = storageService.viewImage(fileName);

            return ResponseEntity.status(HttpStatus.OK)
                    .body(content);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping(value = "/delete/{fileName}")
    public void deleteImage(@PathVariable String fileName){

        try{

            storageService.deleteImageByName(fileName);

        }catch (Exception e)
        {
            throw new RuntimeException(e);
        }

    }


}
