using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using assetmanagement.Interface;
using assetmanagement.Model;
using Newtonsoft.Json;

namespace assetmanagement.Repository
{
    public class UserRepository : IUserRepository
    {
        public async Task<Employee> GetUserDetailsFromDb(string connestionString)
        {
            try
            {
                DataTable objResult = new DataTable();
                SqlDataReader myReader;
                Employee employee = new Employee();
                using (SqlConnection conn = new SqlConnection(connestionString))
                {
                    await conn.OpenAsync();
                    SqlCommand command = new SqlCommand("SELECT * FROM Employee", conn);

                    using (SqlDataReader oReader = command.ExecuteReader())
                    {
                        while (oReader.Read())
                        {
                            employee.EmployeeId = oReader["EmployeeID"].ToString();
                            employee.Email = oReader["Email"].ToString();
                        }

                        conn.Close();
                    }
                }
                return employee;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
