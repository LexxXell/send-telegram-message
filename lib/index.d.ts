type TgOptions = {
    parse_mode: 'Markdown' | 'HTML' | 'None';
    disable_web_page_preview: boolean;
};
/**
 * Sends a message to Telegram.
 * @param {string} message - The message string to be sent.
 * @param {string} chatId - The identifier of the chat to send the message to.
 * @param {string} botToken - The Telegram bot token used for sending the message.
 * @returns {Promise<void>} A Promise that will be fulfilled after the message is successfully sent or rejected in case of an error.
 */
export declare function sendTelegramMessage(message: string, chatId: string, botToken: string, tgOptions?: TgOptions): Promise<void>;
export {};
