using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using shadow_novels.Models;
using System.ComponentModel.DataAnnotations;

namespace shadow_novels.Controllers.Admin
{
    [Route("api/admin/auth")]
    [ApiController]
    public class AdminAuthController : ControllerBase
    {
        [HttpPost]
        [Route("register")]
        public async Task<ResponseResult> Register()
        {
            return new ResponseResult();
        }

        [HttpGet]
        [Route("login")]
        public async Task<ResponseResult> login([FromBody, Required] ModelAuthRequest request)
        {
            return new ResponseResult();
        }
    }
}
