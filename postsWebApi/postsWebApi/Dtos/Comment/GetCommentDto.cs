namespace postsWebApi.Dtos.Comment
{
    public class GetCommentDto
    {
        public int Id { get; set; }
        public string Message { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public string UserName { get; set; } = null!;
    }
}