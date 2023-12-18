using System;
using assetmanagement.Interface;
using assetmanagement.Model;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;

namespace assetmanagement.Service
{
    public class EmailService : IEmailService
    {
        EmailSettings _emailSettings = null;
        public EmailService(IOptions<EmailSettings> options)
        {
            _emailSettings = options.Value;
        }
        /// <summary>
        /// Method will help to send email
        /// </summary>
        public bool SendEmail(EmailData emailData)
        {
            try
            {
                //Email from
                MimeMessage emailMessage = new MimeMessage();
                MailboxAddress emailFrom = new MailboxAddress(_emailSettings.Name, _emailSettings.EmailId);
                emailMessage.From.Add(emailFrom);
                //Email To
                MailboxAddress emailTo = new MailboxAddress(emailData.EmailToName, emailData.EmailToId);
                emailMessage.To.Add(emailTo);
                //Subject
                emailMessage.Subject = emailData.EmailSubject;
                //Body of email
                BodyBuilder emailBodyBuilder = new BodyBuilder();
                emailBodyBuilder.TextBody = emailData.EmailBody;
                emailMessage.Body = emailBodyBuilder.ToMessageBody();
                //using smtp
                SmtpClient emailClient = new SmtpClient();
                emailClient.Connect(_emailSettings.Host, _emailSettings.Port, _emailSettings.UseSSL);
                emailClient.Authenticate(_emailSettings.EmailId, _emailSettings.Password);

                emailClient.Send(emailMessage);

                emailClient.Disconnect(true);
                emailClient.Dispose();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
