// AuthResponse.java
package com.example.demo.Restaurant.DataObject;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class AuthResponse {
    private boolean success;
    private String message;
    private String email;
    private String username;
    private String loginEmail;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLoginEmail() {
        return loginEmail;
    }

    public void setLoginEmail(String loginEmail) {
        this.loginEmail = loginEmail;
    }

    public AuthResponse(boolean success, String message, String email, String username) {
        this.success = success;
        this.message = message;
        this.email = email;
        this.username = username;

    }
}