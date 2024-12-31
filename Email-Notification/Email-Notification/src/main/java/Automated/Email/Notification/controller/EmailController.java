package Automated.Email.Notification.controller;

import Automated.Email.Notification.dto.EmailRequest;
import Automated.Email.Notification.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        // Static recipient email and dynamic message passed in the request
        String toEmail = emailRequest.getToEmail(); // This should come from frontend, or set statically
        String message = emailRequest.getMessage(); // Get message from the frontend request
        String subject = "Your Flight Details - Airline Service";

        // Create formatted HTML content
        String htmlMessage = emailService.createFormattedEmailContent(message);

        try {
            // Send the email
            emailService.sendEmail(toEmail, subject, htmlMessage);
            return "Email sent successfully!";
        } catch (Exception e) {
            return "Failed to send email: " + e.getMessage();
        }
    }
}


