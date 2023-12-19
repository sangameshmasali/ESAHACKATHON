using assetmanagement.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace assetmanagement.Interface
{
    public interface IAssetRepository
    {
        Task<List<Asset>> GetAssetDetailsFromDb(string connestionString);
        Task<bool> AddAssetToDb(string connestionString, Asset asset);
        Task<bool> DeleteAssetToDb(string connestionString, Asset employee);
    }
}
