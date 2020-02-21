package com.capco.exercise2.dto;

import lombok.Data;

import java.util.Date;
import java.util.Map;

@Data
public class JwtParametersDto {
    private String issuer;
    private String subject;
    private Date expiration;
    private Map<String, Object> claims;
}
