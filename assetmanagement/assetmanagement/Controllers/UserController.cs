using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Channels;
using System.Threading.Tasks;
using assetmanagement.Interface;
using assetmanagement.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.PowerShell.Commands;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace assetmanagement.Controllers
{
    public class UserController : Controller
    {
        private IConfiguration _configuration { get; }
        private IUserRepository _userRepository { get; }

        public UserController(IConfiguration configuration, IUserRepository userRepository)
        {
            _configuration = configuration;
            _userRepository = userRepository;
        }



        //[Authorize]
        [HttpGet]
        [Route("api/getUserDetails")]
        public async Task<IActionResult> GetUserDetails(string Email="")
        {
            try
            {
                if(!string.IsNullOrEmpty(Email))
                {
                    var employees = _userRepository.GetUserDetailsFromDb("Server=tcp:serv-test100.database.windows.net,1433;Initial Catalog=AMSDB;Persist Security Info=False;User ID=saadmin;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;",Email);
                    return Ok(employees.Result);
                }
                else
                {
                    var employees = _userRepository.GetUserDetailsFromDb("Server=tcp:serv-test100.database.windows.net,1433;Initial Catalog=AMSDB;Persist Security Info=False;User ID=saadmin;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;","");
                    return Ok(employees.Result);
                }
                
            }
            catch (Exception ex)
            {
                var message = "Error while fetching data, Check Database connection";
                return StatusCode(StatusCodes.Status500InternalServerError, message);
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/addUser")]
        public async Task<IActionResult> AddUser([FromBody] Employee employee )
        {
            try
            {
                var userAdded = _userRepository.AddUserToDb("Server=tcp:serv-test100.database.windows.net,1433;Initial Catalog=AMSDB;Persist Security Info=False;User ID=saadmin;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;", employee);
                if (userAdded.Result)
                    return Ok("User created successfully");
                else
                {
                    var message = "This user is already existing";
                    return StatusCode(StatusCodes.Status400BadRequest, message);
                }

            }
            catch (Exception ex)
            {
                var message = "Error while fetching data, Check Database connection";
                return StatusCode(StatusCodes.Status500InternalServerError, message);
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/deleteUser")]
        public async Task<IActionResult> DeleteUser([FromBody] Employee employee)
        {
            try
            {
                var userAdded = _userRepository.DeleteUserToDb("Server=tcp:serv-test100.database.windows.net,1433;Initial Catalog=AMSDB;Persist Security Info=False;User ID=saadmin;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;", employee);
                if (userAdded.Result)
                    return Ok("User deleted successfully");
                else
                {
                    var message = "Error while fetching data, Check Database connection";
                    return StatusCode(StatusCodes.Status500InternalServerError, message);
                }

            }
            catch (Exception ex)
            {
                var message = "Error while fetching data, Check Database connection";
                return StatusCode(StatusCodes.Status500InternalServerError, message);
            }
        }
    }
}
