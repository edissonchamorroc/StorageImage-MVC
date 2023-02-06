package com.springbootmvc.updateImages.repository;

import com.springbootmvc.updateImages.model.StorageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StorageRepository extends JpaRepository<StorageEntity,Long> {

    Optional<StorageEntity> findByName(String fileName);

    void deleteByName(String fileName);
}