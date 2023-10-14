import https from 'https';

type TgOptions = {
  parse_mode: 'Markdown' | 'HTML' | 'None';
  disable_web_page_preview: boolean;
};

const defaultTgOptions: TgOptions = {
  parse_mode: 'HTML',
  disable_web_page_preview: true,
};

/**
 * Sends a message to Telegram.
 * @param {string} message - The message string to be sent.
 * @param {string} chatId - The identifier of the chat to send the message to.
 * @param {string} botToken - The Telegram bot token used for sending the message.
 * @returns {Promise<void>} A Promise that will be fulfilled after the message is successfully sent or rejected in case of an error.
 */
export async function sendTelegramMessage(
  message: string,
  chatId: string,
  botToken: string,
  tgOptions: TgOptions = defaultTgOptions,
): Promise<void> {
  const data = JSON.stringify({
    chat_id: chatId,
    text: message,
    ...tgOptions,
  });

  const options: https.RequestOptions = {
    hostname: 'api.telegram.org',
    port: 443,
    path: `/bot${botToken}/sendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return new Promise<void>((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Telegram API error. StatusCode: ${res.statusCode}`));
        }
        resolve();
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}
