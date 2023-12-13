namespace postsWebApi.Models
{
    public class Comment
    {
        public int Id { get; set; }
        [Required]
        public string Message { get; set; } = null!;
        public int UserId { get; set; }
        public int PostId { get; set; }
        public User User { get; set; } = null!;
        public Post Post { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
    }
}