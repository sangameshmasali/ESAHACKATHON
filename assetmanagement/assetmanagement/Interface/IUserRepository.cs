using System;
using System.Threading.Tasks;

namespace assetmanagement.Interface
{
    public interface IUserRepository 
    {

        Task<string> GetUserDetailsFromDb(string conn);
    }
}
