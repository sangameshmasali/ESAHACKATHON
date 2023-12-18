using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using assetmanagement.Interface;
using assetmanagement.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace assetmanagement.Controllers
{
    //[Route("api/[controller]")]
    public class UserController : Controller
    {
        private IConfiguration _configuration { get; }
        private IUserRepository _userRepository { get; }

        public UserController(IConfiguration configuration, IUserRepository userRepository)
        {
            _configuration = configuration;
            _userRepository = userRepository;
        }



        [HttpGet]
        [Route("api/GetUserDetails")]
        public async Task<Employee> GetUserDetails()
        {
            var v = _configuration.GetValue<string>("ConnectionStrings");
            var employee = _userRepository.GetUserDetailsFromDb(_configuration.GetValue<string>("ConnectionStrings"));
            return employee.Result;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet]
        [Route("api/GetUser")]
        public string GetUser()
        {
            return "Abhishek";
        }
    }
}
