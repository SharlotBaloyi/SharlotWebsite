using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly DataContext content;
        public OrderController(DataContext context)
        {
            content = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<List<Order>>> Get()
        {
            return Ok(await content.Orders.ToListAsync());
        }

        [HttpGet("id")]
        public async Task<ActionResult<Order>> Get(int id)
        {
            var here = await content.Orders.FindAsync(id);

            if (here == null)
                return BadRequest("Here not found");
            return Ok(here);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<Order>>> AddHere(Order orders)
        {
            content.Orders.Add(orders);
            await content.SaveChangesAsync();
            return Ok(await content.Customers.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Order>>> UpdateHere(Order request)
        {
            var dbOrder = await content.Orders.FindAsync(request.orderId);

            if (dbOrder== null)
                return BadRequest("Here not found");

            dbOrder.orderId= request.orderId;
            dbOrder.customerId=request.customerId;
            dbOrder.customerName= request.customerName;
            dbOrder.orderDate= request.orderDate;
            dbOrder.orderLocation = request.orderLocation;

            

            await content.SaveChangesAsync();
            return Ok(await content.Orders.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Order>>> Delete(int id)
        {
            var dbOrder = await content.Orders.FindAsync(id);

            if (dbOrder == null)
                return BadRequest("customer not found");

            content.Orders.Remove(dbOrder);
            await content.SaveChangesAsync();
            return Ok(await content.Customers.ToListAsync());
        }
    }
}

