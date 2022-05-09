using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Model
{
    public class User
    {
        [Key]
       public int userId { get; set; }
       public string  firstName { get; set; }
       public string  userName { get; set; }
       public string password { get; set; }
    }
}
