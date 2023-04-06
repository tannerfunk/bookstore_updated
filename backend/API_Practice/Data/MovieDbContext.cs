using Microsoft.EntityFrameworkCore;

namespace API_Practice.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Movie> Movies { get; set; } 
    }
}
