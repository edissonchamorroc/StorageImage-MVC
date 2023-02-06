package com.springbootmvc.updateImages.util;

public enum Messages {

    DELETE_SUCCESFULLY("Deleted the image successfully"),
    UPLOAD_SUCCESFULLY("Upload Successfully"),
    GET_SUCCESFULLY("Got the image successfully"),
    IMAGE_NOT_EXIST("The image does not exist!"),
    URI_GET("http://localhost:8080/api/image/view/")

    ;
    private String message;

    Messages(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
