using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using assetmanagement.Interface;
using Newtonsoft.Json;

namespace assetmanagement.Repository
{
    public class UserRepository : IUserRepository
    {
        public async Task<string> GetUserDetailsFromDb(string connestionString)
        {
            try
            {
                DataTable objResult = new DataTable();
                SqlDataReader myReader;
                using (SqlConnection conn = new SqlConnection(connestionString))
                {
                    await conn.OpenAsync();
                    using (SqlCommand command = new SqlCommand("SELECT * FROM Employee", conn))
                    {
                        myReader = command.ExecuteReader();
                        objResult.Load(myReader);
                        //SqlDataAdapter da = new SqlDataAdapter(command);
                        //da.Fill(dt);
                        conn.Close();
                        dynamic jsonResponse = JsonConvert.SerializeObject(objResult);
                        return jsonResponse;
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
