using System;

namespace assetmanagement.Model
{
    public class RequestResponseLog
    {
        public string UserHostIp { get; internal set; }
        public string RequestURL { get; internal set; }
        public int StatusCode { get; internal set; }
        public string RequestData { get; internal set; }
        public string ResponseData { get; internal set; }
        public string ReasonPhrase { get; internal set; }
        public string IdentityUsername { get; internal set; }
        public DateTime Timestamp { get; set; }
        public string ClientUsername { get; internal set; }
        public string ClientType { get; internal set; }
        public string DeviceId { get; internal set; }
        public string Trackid { get; internal set; }
    }
}
