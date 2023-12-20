namespace assetmanagement.Model
{
    public class AssetRequest
    {
        public string EmployeeEmail { get; set; }
        public int AssetID { get; set; }
        public bool AdminRequest { get; set; }
        public bool EmployeeRequest { get; set; }
        public bool TransferRequest { get; set; }
        public string RequestedBy { get; set; }
        public string RequestedTo { get; set; }
    }
}
