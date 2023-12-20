using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using assetmanagement.Interface;
using assetmanagement.Model;
using assetmanagement.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace assetmanagement.Controllers
{
    public class AssetController : Controller
    {
        private IAssetRepository _assetRepository { get; }
        public AssetController(IAssetRepository assetRepository)
        {
            _assetRepository = assetRepository;
        }

        //[Authorize]
        [HttpGet]
        [Route("api/getAssetDetails")]
        public async Task<IActionResult> GetAssetDetails()
        {
            try
            {
                var assets = _assetRepository.GetAssetDetailsFromDb("Server=tcp:serv-test100.database.windows.net,1433;Initial Catalog=AMSDB;Persist Security Info=False;User ID=saadmin;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;");
                return Ok(assets.Result);
            }
            catch (Exception ex)
            {
                var message = "Error while fetching data, Check Database connection";
                return StatusCode(StatusCodes.Status500InternalServerError, message + ex);
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/addDevice")]
        public async Task<IActionResult> AddDevice([FromBody] Asset asset)
        {
            try
            {
                var userAdded = _assetRepository.AddAssetToDb("Server=tcp:serv-test100.database.windows.net,1433;Initial Catalog=AMSDB;Persist Security Info=False;User ID=saadmin;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;", asset);
                if (userAdded.Result)
                    return Ok("Device created successfully");
                else
                {
                    var message = "This device is already existing";
                    return StatusCode(StatusCodes.Status500InternalServerError, message);
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
        [Route("api/deleteDevice")]
        public async Task<IActionResult> DeleteDevice([FromBody] Asset asset)
        {
            try
            {
                var userAdded = _assetRepository.DeleteAssetToDb("Server=tcp:serv-test100.database.windows.net,1433;Initial Catalog=AMSDB;Persist Security Info=False;User ID=saadmin;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;", asset);
                if (userAdded.Result)
                    return Ok("Device deleted successfully");
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

        //[Authorize]
        [HttpPost]
        [Route("api/assetRequest")]
        public async Task<IActionResult> AssetRequest([FromBody] AssetRequest asset)
        {
            try
            {
                var userAdded = _assetRepository.AssetRequestToDb("Server=tcp:serv-test100.database.windows.net,1433;Initial Catalog=AMSDB;Persist Security Info=False;User ID=saadmin;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;", asset);
                if (userAdded.Result)
                    return Ok("Device requested Successfully");
                else
                {
                    var message = "This device is already assigned/requested by other employee";
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
