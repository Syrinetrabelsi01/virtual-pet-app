using Microsoft.AspNetCore.Identity;

namespace backend.Models
{
    public class AppUser : IdentityUser
    {
        public Panda Panda { get; set; } 
    }
}
