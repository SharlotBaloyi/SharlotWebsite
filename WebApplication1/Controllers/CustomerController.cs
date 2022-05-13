﻿using Microsoft.AspNetCore.Http;
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
            return Ok(await content.Users.ToListAsync());
        }
        [HttpGet("id")]
        public async Task<ActionResult<Customer>> Get(int id)
        {
            var here = await content.Users.FindAsync(id);

            if (here == null)
                return BadRequest("Here not found");
            return Ok(here);
        }

        [HttpPost]
        public async Task<ActionResult<List<Customer>>> AddHere(Customer users)
        {
            content.Users.Add(users);
            await content.SaveChangesAsync();
            return Ok(await content.Users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Customer>>> UpdateHere(Customer request)
        {
            var dbCustomer = await content.Users.FindAsync(request.customerId);

            if (dbCustomer == null)
                return BadRequest("Here not found");

            dbCustomer.customerId=request.customerId;
            dbCustomer.customerName=request.customerName;
            dbCustomer.customerAddress=request.customerAddress;
            dbCustomer.emailAddress=request.emailAddress;
            dbCustomer.cellphoneNo=request.cellphoneNo;
            dbCustomer.userName=request.userName;
            dbCustomer.password=request.password;
            dbCustomer.creditCardInfo=request.creditCardInfo;
            dbCustomer.shippingInfo=request.shippingInfo;

            await content.SaveChangesAsync();
            return Ok(await content.Users.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<Customer>>> Delete(int id)
        {
            var dbCustomer = await content.Users.FindAsync(id);

            if (dbCustomer == null)
                return BadRequest("customer not found");

            content.Users.Remove(dbCustomer);
            await content.SaveChangesAsync();
            return Ok(await content.Users.ToListAsync());
        }
    }
}

