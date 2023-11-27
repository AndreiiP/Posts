using postsWebApi.Models;

namespace postsWebApi.Services.CommentService
{
    public interface ICommentService
    {
        Task<ServiceResponse<GetCommentDto>> AddComment(int postId, AddCommentDto newComment, int userId);
    }
}