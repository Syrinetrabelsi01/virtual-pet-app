// Models/Panda.cs
namespace backend.Models
{
    public class Panda
    {
        public int Id { get; set; }
        public int Hunger { get; set; }
        public int Energy { get; set; }
        public int Happiness { get; set; }

        // Foreign Key
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
    }
}
