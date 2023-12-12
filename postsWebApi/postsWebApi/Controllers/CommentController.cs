using Microsoft.AspNetCore.Mvc;
using postsWebApi.Models;
using System.Security.Claims;

namespace postsWebApi.Controllers
{
    [ApiController]
    [Route("api/")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;

        public CommentController(ICommentService commentService)
        {
            _commentService = commentService;
        }

        [Authorize]
        [HttpPost("posts/{postId}/comments")]
        public async Task<ActionResult<ServiceResponse<List<GetCommentDto>>>> AddComment(int postId, AddCommentDto newComment) 
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (userId is null)
            {
                return Unauthorized("User not authorized");
            }

            return Ok(await _commentService.AddComment(postId, newComment, int.Parse(userId)));
        }
    }
}
