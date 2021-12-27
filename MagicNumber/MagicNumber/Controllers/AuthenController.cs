using MagicNumber.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using MagicNumber.Request;
using Microsoft.IdentityModel.Tokens;

namespace MagicNumber.Controllers
{
    public class AuthenController : ApiController
    {
        private readonly UserManager<User> _userManager;
        public AuthenController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Login([FromBody] LoginRequest request)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(request.Username);
                if (user == null)
                {
                    return BadRequest("Username or password is incorrect. Please try again");
                }
                var isCorrect = await _userManager.CheckPasswordAsync(user, request.Password);
                if (!isCorrect)
                {
                    return BadRequest("Username or password is incorrect. Please try again");
                }
                if (user != null && await _userManager.CheckPasswordAsync(user, request.Password))
                {
                    var userRoles = await _userManager.GetRolesAsync(user);
                    var authClaims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Name, request.Username),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                    };
                    foreach (var userRole in userRoles)
                    {
                        authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                    }
                    var authSigninKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("C1CF4B4DC1C4177B7618DE4F55CA2"));
                    var token = new JwtSecurityToken(
                        issuer: "MagicNumber",
                        audience: "MagicNumber.User",
                        expires: DateTime.Now.AddHours(3),
                        claims: authClaims,
                        signingCredentials: new SigningCredentials(authSigninKey, SecurityAlgorithms.HmacSha256)
                        );
                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        User = user.UserName,
                        Role = userRoles,
                    });
                }
            }
            return Unauthorized();
        }
    }
}
