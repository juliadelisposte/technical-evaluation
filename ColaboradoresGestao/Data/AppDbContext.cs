using Microsoft.EntityFrameworkCore;
using SistemaGestaoColaboradores.Models;

namespace SistemaGestaoColaboradores.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Collaborator> Collaborators { get; set; }
        public DbSet<Unit> Units { get; set; }
    }
}

