using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class PandaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PandaController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetPanda()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            Console.WriteLine($"🧪 Token User ID: {userId}");

            var panda = await _context.Pandas.FirstOrDefaultAsync(p => p.AppUserId == userId);

            if (panda == null)
            {
                Console.WriteLine("❌ No panda found for this user.");
                return NotFound("Panda not found");
            }

            return Ok(panda);
        }

        [HttpPut("feed")]
        public async Task<IActionResult> Feed()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var panda = await _context.Pandas.FirstOrDefaultAsync(p => p.AppUserId == userId);
            if (panda == null)
                return NotFound("Panda not found");

            panda.Hunger = Math.Min(panda.Hunger + 10, 100);
            await _context.SaveChangesAsync();

            return Ok(panda);
        }

        [HttpPut("play")]
        public async Task<IActionResult> Play()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var panda = await _context.Pandas.FirstOrDefaultAsync(p => p.AppUserId == userId);
            if (panda == null)
                return NotFound("Panda not found");

            panda.Happiness = Math.Min(panda.Happiness + 10, 100);
            await _context.SaveChangesAsync();

            return Ok(panda);
        }

        [HttpPut("sleep")]
        public async Task<IActionResult> Sleep()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var panda = await _context.Pandas.FirstOrDefaultAsync(p => p.AppUserId == userId);
            if (panda == null)
                return NotFound("Panda not found");

            panda.Energy = Math.Min(panda.Energy + 10, 100);
            await _context.SaveChangesAsync();

            return Ok(panda);
        }
    }
}
