using System.Collections.Generic;
using System.Threading.Tasks;
using Dating.API.Helpers;
using Dating.API.Models;

namespace Dating.API.Data
{
    public interface IDatingRepository
    {
        void Add<T>(T entity) where T:class;
        void Delete<T>(T entity) where T:class;
        Task<bool> SaveAll();
        Task<PagedList<User>> GetUsers(UserParams userParams);
        Task<User> GetUser(int Id);
        Task<Photo> GetPhoto(int Id);
        Task<Photo> GetMainPhotoForUser(int UserId);
        Task<Like> GetLike(int userId, int recipientId); 
    }
}