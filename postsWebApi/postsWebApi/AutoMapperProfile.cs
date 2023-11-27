using AutoMapper;
using postsWebApi.Models;

namespace postsWebApi
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Post, GetPostDto>();
            CreateMap<AddPostDto, Post>();
            CreateMap<AddCommentDto, Comment>();
            CreateMap<Post, PostDto>();
            CreateMap<Comment, GetCommentDto>();

            CreateMap<Comment, GetCommentDto>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User.Username));    
                
            CreateMap<Post, GetPostDto>()
                .ForMember(dest => dest.Comments, opt => opt.MapFrom(src => src.Comments));

        }
    }
}