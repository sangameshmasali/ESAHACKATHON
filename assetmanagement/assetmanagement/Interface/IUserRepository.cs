using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using assetmanagement.Model;

namespace assetmanagement.Interface
{
    public interface IUserRepository 
    {
        
        Task<bool> AddUserToDb(string connestionString, Employee employee);
        Task<bool> DeleteUserToDb(string connestionString, Employee employee);
        Task<List<Employee>> GetUserDetailsFromDb(string connestionString, string email);
    }
}
