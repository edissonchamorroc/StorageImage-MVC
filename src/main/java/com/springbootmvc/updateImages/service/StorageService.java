package com.springbootmvc.updateImages.service;


import com.springbootmvc.updateImages.model.StorageEntity;
import com.springbootmvc.updateImages.repository.StorageRepository;
import com.springbootmvc.updateImages.util.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
@Transactional
public class StorageService {

    @Autowired
    private StorageRepository storageRepository;

    public String uploadImage(MultipartFile file) throws IOException {

        try {
            if (!storageRepository.findByName(file.getOriginalFilename()).isPresent()) {

                StorageEntity imageData = storageRepository.save(
                        StorageEntity.builder()
                                .name(file.getOriginalFilename())
                                .type(file.getContentType())
                                .imgdata(ImageUtils.compressImage(file.getBytes())).build());


            }

            return file.getOriginalFilename();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public byte[] viewImage(String fileName) {

        Optional<StorageEntity> dbImageData = storageRepository.findByName(fileName);

        byte[] images = ImageUtils.decompressImage(dbImageData.get().getImgdata());

        return images;
    }


    public boolean deleteImageByName(String fileName) {

        if (storageRepository.findByName(fileName).isPresent()) {

            storageRepository.deleteByName(fileName);

            return true;

        } else return false;

    }
}
