/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bitshops.service;

import com.bitshops.model.mail.Mail;
import freemarker.template.Configuration;
import java.util.Map;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.*;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

/**
 *
 * @author alejandromdz
 */
@Service
public class MailService {
    
     @Autowired
    JavaMailSender mailSender;
 
    @Autowired
    Configuration fmConfiguration;
 
    public void sendEmail(Mail mail, String templatePath) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
 
        try {
 
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
 
            mimeMessageHelper.setSubject(mail.getMailSubject());
            mimeMessageHelper.setFrom(mail.getMailFrom());
            mimeMessageHelper.setTo(mail.getMailTo());
            mail.setMailContent(geContentFromTemplate(templatePath,mail.getModel()));
            mimeMessageHelper.setText(mail.getMailContent(), true);
 
            mailSender.send(mimeMessageHelper.getMimeMessage());
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
 
    public String geContentFromTemplate(String path,Map < String, Object > model) {
        StringBuffer content = new StringBuffer();
 
        try {
            content.append(FreeMarkerTemplateUtils
                .processTemplateIntoString(fmConfiguration.getTemplate(path), model));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return content.toString();
    }
}
