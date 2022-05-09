using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {

        private readonly DataContext content;
        public UserController(DataContext context)
        {
            content = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            return Ok(await content.Users.FindAsync());
        }
        [HttpGet("id")]
        public async Task<ActionResult<User>> Get(int id)
        {
            var here = await content.Users.FindAsync(id);

            if (here == null)
                return BadRequest("User not found");
            return Ok(here);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddHere(User check)
        {
            content.Users.Add(check);
            await content.SaveChangesAsync();
            return Ok(await content.Users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateHere(User request)
        {
            var dbUser = await content.Users.FindAsync(request.userId);

            if (dbUser == null)
                return BadRequest("User not found");

            dbUser.firstName = request.firstName;
            dbUser.userName = request.userName;

            await content.SaveChangesAsync();
            return Ok(await content.Users.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<User>>> Delete(int id)
        {
            var dbUser = await content.Users.FindAsync(id);

            if (dbUser == null)
                return BadRequest("User not found");

            content.Users.Remove(dbUser);
            await content.SaveChangesAsync();
            return Ok(await content.Users.ToListAsync());
        }
    }
}