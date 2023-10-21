using Microsoft.AspNetCore.Mvc;
using postsWebApi.Models;


namespace postsWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<GetPostDto>>>> Get() 
        {
            return Ok(await _postService.GetAllPosts());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetPostDto>>> GetSingle(int id) 
        {
            return Ok(await _postService.GetPostById(id));
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<GetPostDto>>>> AddPost(AddPostDto newPost) 
        {
            return Ok(await _postService.AddPost(newPost));
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<GetPostDto>>>> UpdatePost(UpdatePostDto updatedPost) 
        {
            var response = await _postService.UpdatePost(updatedPost);

            if (response.Data is null) {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<GetPostDto>>> DeletePost(int id) 
        {
            var response = await _postService.DeletePost(id);

            if (response.Data is null) {
                return NotFound(response);
            }
            return Ok(response);
        }
    }
}