using postsWebApi.Models;

namespace postsWebApi.Services.PostService
{
    public interface IPostService
    {
        Task<ServiceResponse<List<PostDto>>> GetAllPosts();

        Task<ServiceResponse<GetPostDto>> GetPostById(int id);

        Task<ServiceResponse<List<PostDto>>> AddPost(AddPostDto newPost);

        Task<ServiceResponse<GetPostDto>> UpdatePost(UpdatePostDto updatedPost);

        Task<ServiceResponse<List<PostDto>>> DeletePost(int id);
    }
}