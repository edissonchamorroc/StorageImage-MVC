package com.springbootmvc.updateImages.model;

import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Table(name = "imagedata")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StorageEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    @Type(type="org.hibernate.type.BinaryType")
    @Column(name = "imgdata",length = 1000)
    private byte[] imgdata;

}
