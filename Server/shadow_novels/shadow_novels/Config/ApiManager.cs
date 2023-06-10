namespace shadow_novels.Config
{
    internal class ApiManager
    {
        private readonly string Environment = AppEnvironment.Development.ToString();

        private ApiManager() { }
        private static ApiManager instance = null;
        internal static ApiManager Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new ApiManager();
                }
                return instance;
            }
        }

        internal string GetConnectionString()
        {
            if (Environment == AppEnvironment.Development.ToString())
            {
                return @"";
            }
            else if (Environment == AppEnvironment.Host.ToString())
            {
                return "";
            }
            else
            { return ""; }
        }

        internal string GetDiscordWebhook()
        {
            if (Environment == AppEnvironment.Development.ToString())
            {
                return @"https://discord.com/api/webhooks/1116969935512555530/4kEbPIHjdDbw7kWuBkLa6bICdk9l8rt4o8DzmttuTURQqBedUeSZfADE_49RYCEhiwLj";
            }
            else if (Environment == AppEnvironment.Host.ToString())
            {
                return "";
            }
            else
            { return ""; }
        }

        internal string GetEnvironment()
        { return Environment; }
    }

    internal enum ApiResponse
    {
        Success,
        Fail
    }

    internal enum AppEnvironment
    {
        Host,
        Development
    }
}
