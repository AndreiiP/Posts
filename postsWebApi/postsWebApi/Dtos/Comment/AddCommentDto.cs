namespace postsWebApi.Dtos.Comment
{
    public class AddCommentDto
    {
        [Required]
        public string Message { get; set; } = null!;
    }
}