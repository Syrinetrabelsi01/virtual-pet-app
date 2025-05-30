namespace backend.Models
{
    public class Panda
    {
        public int Id { get; set; }
        public int Hunger { get; set; } = 60;
        public int Energy { get; set; } = 60;
        public int Happiness { get; set; } = 60;

        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
    }
}
