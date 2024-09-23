using Microsoft.AspNetCore.Mvc;
using SistemaGestaoColaboradores.Data;
using SistemaGestaoColaboradores.Models;
using Microsoft.EntityFrameworkCore;


namespace SistemaGestaoColaboradores.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnitController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UnitController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateUnit([FromBody] Unit unit)
        {
            _context.Units.Add(unit);
            _context.SaveChanges();
            return Ok(unit);
        }

        [HttpGet]
        public IActionResult GetUnits()
        {
            var units = _context.Units.Include(u => u.Collaborators).ToList();
            return Ok(units);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUnit(int id, [FromBody] Unit updatedUnit)
        {
            var unit = _context.Units.Find(id);
            if (unit == null) return NotFound();

            unit.IsActive = updatedUnit.IsActive;
            _context.SaveChanges();
            return Ok(unit);
        }
    }
}
