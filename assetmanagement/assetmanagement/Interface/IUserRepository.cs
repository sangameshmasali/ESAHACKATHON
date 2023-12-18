using System;
using System.Threading.Tasks;
using assetmanagement.Model;

namespace assetmanagement.Interface
{
    public interface IUserRepository 
    {
        Task<Employee> GetUserDetailsFromDb(string connestionString);
    }
}
