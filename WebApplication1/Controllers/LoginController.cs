using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApplication1.Data;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly DataContext context;
        private readonly IConfiguration configuration;
        public LoginController(DataContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }
        [HttpPost]
        public async Task<ActionResult<String>> Login(Logins login)
        {
            var user = context.Customers.Where(x => x.userName == login.username && x.password == login.password)
                .FirstOrDefault();
            if (user == null) return BadRequest("The user doesn't exist");

            var token = GenerateToken(user);
            return Ok(token);
        }

        private string GenerateToken(Customer user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(configuration["Jwt:Secret"]);
            var issuer = this.configuration["Jwt:Issuer"];
            var audience = this.configuration["Jwt:Audience"];

            var claimIdentity = new ClaimsIdentity(new[]
            {
                new Claim("id", user.customerId.ToString()),
                new Claim("email", user.emailAddress)
            });
            var signingCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimIdentity,
                Issuer = issuer,
                Audience = audience,
                Expires = DateTime.Now.AddHours(1),
                SigningCredentials = signingCredentials,

            };
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(securityToken);
        }
    }
}


