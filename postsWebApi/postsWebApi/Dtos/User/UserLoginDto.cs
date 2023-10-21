namespace postsWebApi.Dtos.User
{
    public class UserLoginDto
    {
        [Required]
        public string Email { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
    }
}