package com.email.Assistant.Controller;

import com.email.Assistant.Service.EmailGenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
public class EmailGenController {

    private final EmailGenService emailGenService;

    @Autowired
    public EmailGenController(EmailGenService emailGenService) {
        this.emailGenService = emailGenService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String response = emailGenService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}
