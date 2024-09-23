using Microsoft.AspNetCore.Mvc;
using SistemaGestaoColaboradores.Data;
using SistemaGestaoColaboradores.Models;
using Microsoft.EntityFrameworkCore;


namespace SistemaGestaoColaboradores.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateUser([FromBody] User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(user);
        }

        [HttpGet]
        public IActionResult GetUsers([FromQuery] bool? isActive)
        {
            var users = _context.Users
                .Where(u => isActive == null || u.IsActive == isActive)
                .ToList();
            return Ok(users);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, [FromBody] User updatedUser)
        {
            var user = _context.Users.Find(id);
            if (user == null) return NotFound();

            user.Password = updatedUser.Password;
            user.IsActive = updatedUser.IsActive;

            _context.SaveChanges();
            return Ok(user);
        }
    }
}
