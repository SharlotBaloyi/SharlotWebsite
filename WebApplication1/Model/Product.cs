using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Model
{
    public class Product
    {
        [Key]
        public int productId { get; set; }
        public string productName { get; set; }
        public string description { get; set; }
        public float price { get; set; }
        public string imagefilename { get; set; }
    }
}
