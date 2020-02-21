package com.capco.exercise2.service;

import com.capco.exercise2.dto.JwtParametersDto;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JWTService {

    @Value("${security.signature.key}")
    private String signatureKey;

    public String createJwtToken(JwtParametersDto parameters) {
        JwtBuilder jwtBuilder = Jwts.builder().setIssuer(parameters.getIssuer())
                .setSubject(parameters.getSubject())
                .setExpiration(parameters.getExpiration());

        if (parameters.getClaims() != null) {
            parameters.getClaims().forEach(jwtBuilder::claim);
        }

        return jwtBuilder.signWith(Keys.hmacShaKeyFor(signatureKey.getBytes())).compact();
    }
}
