using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using assetmanagement.Interface;
using assetmanagement.Model;
using Microsoft.AspNetCore.Mvc;

namespace assetmanagement.Controllers
{
    //[Route("api/[controller]")]
    public class EmailController : Controller
    {
        IEmailService _emailService = null;
        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }


        [HttpPost]
        [Route("api/sendEmail")]
        public bool SendEmail([FromBody] EmailData emailData)
        {
            return _emailService.SendEmail(emailData);
        }
    }
}
