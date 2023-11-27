using AutoMapper;
using postsWebApi.Models;

namespace postsWebApi.Services.CommentService
{
    public class CommentService : ICommentService
    {
        private readonly IMapper _mapper;

        private readonly DataContext _context;

        public CommentService(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<ServiceResponse<GetCommentDto>> AddComment(int postId, AddCommentDto newComment, int userId)
        {
            var serviceResponse = new ServiceResponse<GetCommentDto>();
            var comment = _mapper.Map<Comment>(newComment);

            comment.PostId = postId;
            comment.UserId = userId;
            comment.CreatedAt = DateTime.Now;

            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            serviceResponse.Data = _mapper.Map<GetCommentDto>(comment);

            return serviceResponse;
        }
    }
}