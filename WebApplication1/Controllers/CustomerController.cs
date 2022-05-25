using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        private readonly DataContext content;
        public CustomerController(DataContext context)
        {
              content = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Customer>>> Get()
        {
            return Ok(await content.Customers.ToListAsync());
        }
        [HttpGet("id")]
        public async Task<ActionResult<Customer>> Get(int id)
        {
            var here = await content.Customers.FindAsync(id);

            if (here == null)
                return BadRequest("Here not found");
            return Ok(here);
        }

        [HttpPost]
        public async Task<ActionResult<List<Customer>>> AddHere(Customer users)
        {
            content.Customers.Add(users);
            await content.SaveChangesAsync();
            return Ok(await content.Customers.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Customer>>> UpdateHere(Customer request)
        {
            var dbCustomer = await content.Customers.FindAsync(request.customerId);

            if (dbCustomer == null)
                return BadRequest("Here not found");

            dbCustomer.customerId=request.customerId;
            dbCustomer.customerName=request.customerName;
            dbCustomer.customerAddress=request.customerAddress;
            dbCustomer.emailAddress=request.emailAddress;
            dbCustomer.cellphoneNo=request.cellphoneNo;
            dbCustomer.userName=request.userName;
            dbCustomer.password=request.password;
            

            await content.SaveChangesAsync();
            return Ok(await content.Customers.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<Customer>>> Delete(int id)
        {
            var dbCustomer = await content.Customers.FindAsync(id);

            if (dbCustomer == null)
                return BadRequest("customer not found");

            content.Customers.Remove(dbCustomer);
            await content.SaveChangesAsync();
            return Ok(await content.Customers.ToListAsync());
        }
    }
}

