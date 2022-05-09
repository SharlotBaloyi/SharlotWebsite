using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Model
{
    public class OrderDetail
    {
        [Key]
        public int orderDetailId { get; set; }
        public int orderId { get; set; }
        public int customerId { get; set; }
        public int quantity { get; set; }
    }
}
