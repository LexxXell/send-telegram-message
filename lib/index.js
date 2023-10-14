"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTelegramMessage = void 0;
const https_1 = __importDefault(require("https"));
const defaultTgOptions = {
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
function sendTelegramMessage(message, chatId, botToken, tgOptions = defaultTgOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = JSON.stringify(Object.assign({ chat_id: chatId, text: message }, tgOptions));
        const options = {
            hostname: 'api.telegram.org',
            port: 443,
            path: `/bot${botToken}/sendMessage`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return new Promise((resolve, reject) => {
            const req = https_1.default.request(options, (res) => {
                res.on('data', () => { });
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
    });
}
exports.sendTelegramMessage = sendTelegramMessage;
