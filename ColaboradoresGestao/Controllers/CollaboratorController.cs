using Microsoft.AspNetCore.Mvc;
using SistemaGestaoColaboradores.Data;
using SistemaGestaoColaboradores.Models;
using Microsoft.EntityFrameworkCore;


namespace SistemaGestaoColaboradores.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollaboratorController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CollaboratorController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateCollaborator([FromBody] Collaborator collaborator)
        {
            _context.Collaborators.Add(collaborator);
            _context.SaveChanges();
            return Ok(collaborator);
        }

        [HttpGet]
        public IActionResult GetCollaborators()
        {
            var collaborators = _context.Collaborators
                .Include(c => c.Unit)
                .Include(c => c.User)
                .ToList();
            return Ok(collaborators);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCollaborator(int id, [FromBody] Collaborator updatedCollaborator)
        {
            var collaborator = _context.Collaborators.Find(id);
            if (collaborator == null) return NotFound();

            collaborator.Name = updatedCollaborator.Name;
            collaborator.UnitId = updatedCollaborator.UnitId;

            _context.SaveChanges();
            return Ok(collaborator);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCollaborator(int id)
        {
            var collaborator = _context.Collaborators.Find(id);
            if (collaborator == null) return NotFound();

            _context.Collaborators.Remove(collaborator);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
