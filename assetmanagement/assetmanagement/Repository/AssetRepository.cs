using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Threading.Tasks;
using assetmanagement.Interface;
using assetmanagement.Model;

namespace assetmanagement.Repository
{
    public class AssetRepository : IAssetRepository
    {
        public async Task<List<Asset>> GetAssetDetailsFromDb(string connestionString)
        {
            try
            {
                DataTable objResult = new DataTable();
                SqlDataReader myReader;
                List<Asset> assets = new List<Asset>();
                using (SqlConnection conn = new SqlConnection(connestionString))
                {
                    await conn.OpenAsync();

                    SqlCommand command = new SqlCommand("Select A.AssetId,A.AssetName,A.UniqueIdentifier,AM.EmployeeEmail from Asset A left join AssetMapping AM on A.AssetId = AM.AssetId where A.IsActive=1", conn);

                    using (SqlDataReader oReader = command.ExecuteReader())
                    {
                        while (oReader.Read())
                        {
                            Asset asset = new Asset();
                            asset.AssetId = Convert.ToInt16(oReader["AssetId"]);
                            asset.AssetName = oReader["AssetName"].ToString();
                            asset.UniqueIdentifier = oReader["UniqueIdentifier"].ToString();
                            asset.EmployeeEmail = oReader["EmployeeEmail"].ToString();
                            assets.Add(asset);
                        }

                        conn.Close();
                    }
                }
                return assets;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> AddAssetToDb(string connestionString, Asset asset)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connestionString))
                {
                    await conn.OpenAsync();

                    using (SqlCommand command = new SqlCommand("UPSERTASSET", conn))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@AssetName", asset.AssetName);
                        command.Parameters.AddWithValue("@UniqueIdentifier", asset.UniqueIdentifier);
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

        public async Task<bool> DeleteAssetToDb(string connestionString, Asset asset)
        {
            try
            {
                string deleteQuery = $"UPDATE Asset SET IsActive= 0 WHERE UniqueIdentifier = @UniqueIdentifier";

                using (SqlConnection conn = new SqlConnection(connestionString))
                {
                    await conn.OpenAsync();

                    using (SqlCommand command = new SqlCommand(deleteQuery, conn))
                    {
                        command.Parameters.AddWithValue("@UniqueIdentifier", asset.UniqueIdentifier);
                        int rowAffected = command.ExecuteNonQuery();
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

        public async Task<bool> AssetRequestToDb(string connestionString, AssetRequest asset)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connestionString))
                {
                    await conn.OpenAsync();

                    using (SqlCommand command = new SqlCommand("ASSETREQUESTPROC", conn))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@EmployeeEmail", asset.EmployeeEmail);
                        command.Parameters.AddWithValue("@AssetID", asset.AssetID);
                        command.Parameters.AddWithValue("@AdminRequest", asset.AdminRequest);
                        command.Parameters.AddWithValue("@EmployeeRequest", asset.EmployeeRequest);
                        command.Parameters.AddWithValue("@TransferRequest", asset.TransferRequest);
                        command.Parameters.AddWithValue("@RequestedBy", asset.RequestedBy);
                        command.Parameters.AddWithValue("@RequestedTo", asset.RequestedTo);
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