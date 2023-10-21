namespace postsWebApi.Dtos.Post
{
    public class GetPostDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Body { get; set; } = null!;
    }
}