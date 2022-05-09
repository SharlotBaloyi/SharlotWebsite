using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using WebApplication1.Data;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailController : Controller
    {
        private readonly DataContext content;
        public OrderDetailController(DataContext context)
        {
            content = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<OrderDetail>>> Get()
        {
            return Ok(await content.OrderDetails.FindAsync());
        }
        [HttpGet("id")]
        public async Task<ActionResult<OrderDetail>> Get(int id)
        {
            var here = await content.OrderDetails.FindAsync(id);

            if (here == null)
                return BadRequest("Here not found");
            return Ok(here);
        }
        [HttpPost]
        public async Task<ActionResult<List<OrderDetail>>> AddHere(OrderDetail orders)
        {
            content.OrderDetails.Add(orders);
            await content.SaveChangesAsync();
            return Ok(await content.OrderDetails.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<OrderDetail>>> UpdateHere(OrderDetail request)
        {
            var dbOrderDetail = await content.OrderDetails.FindAsync(request.orderId);

            if (dbOrderDetail == null)
                return BadRequest("order details not found");

             dbOrderDetail.orderDetailId=request.orderId;
            dbOrderDetail.orderId=request.orderId;
            dbOrderDetail.customerId=request.customerId;
            dbOrderDetail.quantity = request.quantity;
           
            await content.SaveChangesAsync();
            return Ok(await content.OrderDetails.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<OrderDetail>>> Delete(int id)
        {
            var dbOrderDetail = await content.OrderDetails.FindAsync(id);

            if (dbOrderDetail == null)
                return BadRequest("customer not found");

            content.OrderDetails.Remove(dbOrderDetail);
            await content.SaveChangesAsync();
            return Ok(await content.Users.ToListAsync());
        }
    }
}
