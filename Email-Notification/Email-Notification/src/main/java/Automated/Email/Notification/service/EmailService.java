package Automated.Email.Notification.service;

import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;



import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    
    public void sendEmail(String toEmail, String subject, String message) throws MessagingException, MessagingException {
        
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true); 
        

        
        helper.setTo(toEmail);
        helper.setSubject(subject);

        helper.setText(message, true);
        

        // Send the email
        mailSender.send(mimeMessage);
    }

   
    public String createFormattedEmailContent(String flightDetails) {
        return "<html>" +
                "<body style='font-family: Arial, sans-serif; background-color: #f4f4f9;'>" +
                "<div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px;'>" +
                "<h1 style='color: #333333;'>Thank You for Choosing Airline Service!</h1>" +
                "<p style='color: #555555;'>Dear Intern,</p>" +
                "<p style='color: #555555;'>We are pleased to share your flight details with you.</p>" +
                "<p style='color: #555555;'>Here are your flight details:</p>" +
                "<ul style='color: #555555; list-style-type: none; padding: 0;'>" +
                "<li><strong>Flight Number:</strong> AB1234</li>" +
                "<li><strong>Departure:</strong> Bavdhan India </li>" +
                "<li><strong>Arrival:</strong> Shivaji Nagr </li>" +
                "<li><strong>Date:</strong> December 25, 2024</li>" +
                "</ul>" +
                "<p style='color: #555555;'>Thank you for trusting us with your travel needs. We wish you a pleasant journey!</p>" +
                "<p style='color: #555555;'>If you need further assistance, feel free to reach out to our customer support.</p>" +
                "<p style='color: #333333; font-weight: bold;'>Best Regards,</p>" +
                "<p style='color: #333333; font-weight: bold;'>Backend Developer Intern Team</p>" +
                "<p style='font-size: 12px; color: #999999;'>This is an automated email, please do not reply.</p>" +
                "</div>" +
                "</body>" +
                "</html>";
    }
}