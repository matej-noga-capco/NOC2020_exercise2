package com.capco.exercise2.controller;

import com.capco.exercise2.dto.JwtParametersDto;
import com.capco.exercise2.service.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class DefaultController {

    private final JWTService jwtService;

    @PostMapping("/token")
    public String createToken(@RequestBody JwtParametersDto jwtParametersDto) {
        return "{\"token\": \"" + jwtService.createJwtToken(jwtParametersDto) + "\"}";
    }

    @GetMapping("/keycloak-token")
    public String getKeycloakToken() {
        return "{\"token\": \"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJLbmZQSG9yMTFSUVZRR3I0UlUxbE93ZjdEdXZ0ODUtdnM0bThfeXdycng4In0.eyJqdGkiOiI4ZmI1MzRhYS1hMzlkLTQxOTctYjE0Ni1jMWY4NjA2MzhiYzciLCJleHAiOjE1ODIyMDYwOTcsIm5iZiI6MCwiaWF0IjoxNTgyMjA1Nzk3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwMDAvYXV0aC9yZWFsbXMvaUFjY2VzcyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkNzk2ZDgyMS1mYWU5LTQxODUtOThmNC1hNzBlYWNkOGY3NzEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJTQ0IiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI5ZmQzMzk3NC0yNmQwLTRmMmUtOTJjNy0yYTU2MzNlOGNiYTAiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlc291cmNlX2FjY2VzcyI6eyJTQ0IiOnsicm9sZXMiOlsiaVByb2ZpbGUiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiczk5OTA2In0.ZtD11MVngSiVRklTOQ0k3tn8h2THPO16bJpK8MqNJ76ggBS5_k0JLGAmZ2bIuOjHDfiubiv049Arywet_MULp8JPH9X8DbdSHgSZqLb1H3MO16ZUdGG2DuNhPibeqLIVvHsYlFJBJMqekU3esPJ_WeewKWhG9YujrJfRnVSvLocRhbBywYvsmdIkgSCo0Ko9AqkUAGdJVEAV2S-9r0U9nGLwf4BHBacGVw51lxO4rfykh6YMC5ZFG4Wr7S0845Mildogrtm_GOCydcxpuOc4YhT9hGS7rphWPx-tmPMvUy5R3QxQeP8xpLe4zRJTz2SceDd-JhHJ20TO0FCfY9qauw\"}";
    }

}
