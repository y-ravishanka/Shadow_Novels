using JNogueira.Discord.Webhook.Client;
using shadow_novels.Models;

namespace shadow_novels.Config
{
    internal class Helper
    {
        internal async Task SendDiscordMessage(string key, string title, string msg)
        {
            var client = new DiscordWebhookClient(ApiManager.Instance.GetDiscordWebhook());

            var message = new DiscordMessage(
                "Got an Error in Backend !!!  " + DiscordEmoji.Angry,
                username: ApiManager.Instance.GetEnvironment() + " Error Bot",
                avatarUrl: @"https://static.vecteezy.com/system/resources/previews/000/355/037/original/lady-bug-vector-icon.jpg",
                tts: false,
                embeds: new[]
                {
                    new DiscordMessageEmbed(
                        string.Concat("Error Method : ", key),
                        color: null,
                        author: new DiscordMessageEmbedAuthor("System User"),
                        url: null,
                        description: string.Concat("Message : \n", title, "\nStack Trace : \n", msg),
                        fields: null,
                        thumbnail: null,
                        image: null,
                        footer: new DiscordMessageEmbedFooter("Thank You !!!")
                        )
                }
                );

            await client.SendToDiscord(message);
        }
    }
}
