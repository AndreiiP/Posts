using AutoMapper;
using postsWebApi.Models;

namespace postsWebApi.Services.PostService
{
    public class PostService : IPostService
    { 
        private readonly IMapper _mapper;

        private readonly DataContext _context;

        public PostService(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }
    
        public async Task<ServiceResponse<List<GetPostDto>>> AddPost(AddPostDto newPost)
        {
            var serviceResponse = new ServiceResponse<List<GetPostDto>>();
            var post = _mapper.Map<Post>(newPost);

            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            serviceResponse.Data = await _context.Posts.Select(p => _mapper.Map<GetPostDto>(p)).ToListAsync();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetPostDto>>> GetAllPosts()
        {
            var serviceResponse = new ServiceResponse<List<GetPostDto>>();
            var posts = await _context.Posts.ToListAsync();
            serviceResponse.Data = posts.Select(p => _mapper.Map<GetPostDto>(p)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetPostDto>> GetPostById(int id)
        {
            var serviceResponse = new ServiceResponse<GetPostDto>();
            var posts = await _context.Posts.FirstOrDefaultAsync(p => p.Id == id);
            serviceResponse.Data = _mapper.Map<GetPostDto>(posts);
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetPostDto>> UpdatePost(UpdatePostDto updatedPost)
        {
            var serviceResponse = new ServiceResponse<GetPostDto>();

            try {
                var post = await _context.Posts.FirstOrDefaultAsync(p => p.Id == updatedPost.Id);
                
                if (post is null)
                    throw new Exception($"Post with id '{updatedPost.Id}' not found");

                if (updatedPost.Title != null)
                    post.Title = updatedPost.Title;

                if (updatedPost.Body != null)
                    post.Body = updatedPost.Body;

                await _context.SaveChangesAsync();
                serviceResponse.Data = _mapper.Map<GetPostDto>(post);

            } catch (Exception ex) 
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetPostDto>>> DeletePost(int id)
        {
            var serviceResponse = new ServiceResponse<List<GetPostDto>>();
            var post = await _context.Posts.FirstOrDefaultAsync(p => p.Id == id);

            try {
                
                if (post is null)
                    throw new Exception($"Post with id '{id}' not found");

                _context.Posts.Remove(post);
                await _context.SaveChangesAsync(); 

                serviceResponse.Data = _context.Posts.Select(c => _mapper.Map<GetPostDto>(c)).ToList();

            } catch (Exception ex) 
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            
            return serviceResponse;
        }
    }
}
