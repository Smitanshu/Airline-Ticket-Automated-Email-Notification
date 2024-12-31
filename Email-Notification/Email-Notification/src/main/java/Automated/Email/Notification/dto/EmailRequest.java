package Automated.Email.Notification.dto;

public class EmailRequest {

    private String toEmail;
    private String message;

    public String  getToEmail(){
        return toEmail;

    }
    public void  setEmail(String toEmail){
        this.toEmail=toEmail;

    }
    public String  getMessage(){
        return message;
    }
    public void setMessage(){
        this.message=message;
    }
}
