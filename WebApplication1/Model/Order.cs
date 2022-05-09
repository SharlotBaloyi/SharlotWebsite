using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Model
{
    public class Order
    {
        [Key]
        public int orderId { get; set; }
        public int customerId { get; set; }
        public string customerName { get; set; }
        public string orderDate { get; set; }
        public string orderLocation { get; set; }
    }
}
