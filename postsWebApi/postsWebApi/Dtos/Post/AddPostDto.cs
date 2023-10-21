namespace postsWebApi.Dtos.Post
{
    public class AddPostDto
    {
        [Required]
        public string Title { get; set; } = null!;

        [Required]
        public string Body { get; set; } = null!;
    }
}