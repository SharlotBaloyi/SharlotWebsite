using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using WebApplication1.Data;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly DataContext content;
        public ProductController(DataContext context)
        {
            content = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> Get()
        {
            return Ok(await content.Products.FindAsync());
        }
        [HttpGet("id")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            var here = await content.Users.FindAsync(id);

            if (here == null)
                return BadRequest("Here not found");
            return Ok(here);
        }
        [HttpPost]
        public async Task<ActionResult<List<Product>>> AddHere(Product users)
        {
            content.Products.Add(users);
            await content.SaveChangesAsync();
            return Ok(await content.Products.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Product>>> UpdateHere(Product request)
        {
            var dbProduct = await content.Products.FindAsync(request.productId);

            if (dbProduct == null)
                return BadRequest("Here not found");

            dbProduct.productId=request.productId;
            dbProduct.productName= request.productName;
            dbProduct.description= request.description;
            dbProduct.price= request.price;
            dbProduct.imagefilename= request.imagefilename;

            await content.SaveChangesAsync();
            return Ok(await content.Products.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<Product>>> Delete(int id)
        {
            var dbProduct = await content.Products.FindAsync(id);

            if (dbProduct == null)
                return BadRequest("Product not found");

            content.Products.Remove(dbProduct);
            await content.SaveChangesAsync();
            return Ok(await content.Products.ToListAsync());
        }
    }
}

