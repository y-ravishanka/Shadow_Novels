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
                return "";
            }
            else if (Environment == AppEnvironment.Host.ToString())
            {
                return "";
            }
            else
            { return ""; }
        }
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
