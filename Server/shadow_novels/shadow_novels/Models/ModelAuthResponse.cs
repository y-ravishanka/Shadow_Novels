namespace shadow_novels.Models
{
    public class ModelAuthResponse
    {
        public string? Token { get; set; }
        public string? IdentityToken { get; set; }
        public object? User { get; set; }
    }
}
