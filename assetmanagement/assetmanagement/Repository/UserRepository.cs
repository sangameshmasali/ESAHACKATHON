using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Threading.Tasks;
using assetmanagement.Interface;
using assetmanagement.Model;
using Newtonsoft.Json;

namespace assetmanagement.Repository
{
    public class UserRepository : IUserRepository
    {
        public async Task<List<Employee>> GetUserDetailsFromDb(string connestionString)
        {
            try
            {
                DataTable objResult = new DataTable();
                SqlDataReader myReader;
                List<Employee> employees = new List<Employee>();
                using (SqlConnection conn = new SqlConnection(connestionString))
                {
                    await conn.OpenAsync();
                    
                    SqlCommand command = new SqlCommand("SELECT * FROM Employee where IsActive=1", conn);

                    using (SqlDataReader oReader = command.ExecuteReader())
                    {
                        
                        while (oReader.Read())
                        {
                            Employee employee = new Employee();
                            employee.EmployeeId = oReader["EmployeeID"].ToString();
                            employee.Email = oReader["Email"].ToString();
                            employees.Add(employee);
                        }

                        conn.Close();
                    }
                }
                return employees;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> AddUserToDb(string connestionString, Employee employee)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connestionString))
                {
                    await conn.OpenAsync();

                    using (SqlCommand command = new SqlCommand("UPSERTUSER", conn))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@EmployeeId", employee.EmployeeId);
                        command.Parameters.AddWithValue("@EmployeeName", employee.EmployeeName);
                        command.Parameters.AddWithValue("@Email", employee.Email);
                        command.Parameters.Add("@RowsAffected", SqlDbType.Int).Direction = ParameterDirection.Output;
                         command.ExecuteNonQuery();
                        int rowAffected = Convert.ToInt32(command.Parameters["@RowsAffected"].Value);
                        conn.Close();
                        if (rowAffected > 0)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
                return employee;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> DeleteUserToDb(string connestionString, Employee employee)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connestionString))
                {
                    await conn.OpenAsync();

                    using (SqlCommand command = new SqlCommand("DELETEUSER", conn))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@Email", employee.Email);
                        command.Parameters.Add("@RowsAffected", SqlDbType.Int).Direction = ParameterDirection.Output;
                        command.ExecuteNonQuery();
                        int rowAffected = Convert.ToInt32(command.Parameters["@RowsAffected"].Value);
                        conn.Close();
                        if (rowAffected > 0)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
