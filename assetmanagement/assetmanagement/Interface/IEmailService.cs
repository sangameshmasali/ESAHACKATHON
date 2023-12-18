using System;
using assetmanagement.Model;

namespace assetmanagement.Interface
{
    public interface IEmailService
    {
        bool SendEmail(EmailData emailData);
    }
}
