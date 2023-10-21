using postsWebApi.Models;

namespace postsWebApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Post> Posts => Set<Post>();
        public DbSet<User> Users => Set<User>();
    }
}