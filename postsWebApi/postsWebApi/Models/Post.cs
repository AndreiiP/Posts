namespace postsWebApi.Models
{
    public class Post
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; } = null!;

        [Required]
        public string Body { get; set; } = null!;
    }
}