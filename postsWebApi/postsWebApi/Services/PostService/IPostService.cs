using postsWebApi.Models;

namespace postsWebApi.Services.PostService
{
    public interface IPostService
    {
        Task<ServiceResponse<List<GetPostDto>>> GetAllPosts();

        Task<ServiceResponse<GetPostDto>> GetPostById(int id);

        Task<ServiceResponse<List<GetPostDto>>> AddPost(AddPostDto newPost);

        Task<ServiceResponse<GetPostDto>> UpdatePost(UpdatePostDto updatedPost);

        Task<ServiceResponse<List<GetPostDto>>> DeletePost(int id);
    }
}