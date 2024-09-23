namespace SistemaGestaoColaboradores.Models
{
    public class Collaborator
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UnitId { get; set; }
        public Unit? Unit { get; set; }  // Tornando a propriedade anulável
        public int UserId { get; set; }
        public User? User { get; set; }  // Tornando a propriedade anulável
    }
}
