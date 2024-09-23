namespace SistemaGestaoColaboradores.Models
{
    public class Unit
    {
        public int Id { get; set; }
        public string UnitCode { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public ICollection<Collaborator> Collaborators { get; set; } = new List<Collaborator>(); // Valor padrão
    }
}
