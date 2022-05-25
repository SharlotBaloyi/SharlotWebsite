using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Model
{
    public class Customer
    {
         [Key]
        public int customerId { get; set; }
        public string customerName { get; set; }
        public string customerAddress { get; set; }
        public string emailAddress { get; set; }
        public string cellphoneNo{ get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        


    }
    
}
