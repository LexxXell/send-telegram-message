### lexxxell/send-telegram-message

This is a Node.js library designed for sending messages to Telegram. It leverages the Telegram Bot API to send messages to designated chats.

#### Installation

To install the `lexxxell/send-telegram-message` library, run the following command:

```bash
npm install lexxxell/send-telegram-message
```

#### Usage

First, import the library and then use the `sendTelegramMessage` function to send messages.

```javascript
import { sendTelegramMessage } from '@lexxxell/send-telegram-message';

// Example usage
const message = 'Hello from lexxxell/send-telegram-message!';
const chatId = 'YOUR_CHAT_ID';
const botToken = 'YOUR_BOT_TOKEN';

sendTelegramMessage(message, chatId, botToken)
  .then(() => console.log('Message sent successfully!'))
  .catch((error) => console.error('Error sending message:', error));
```

#### API

##### `sendTelegramMessage(message, chatId, botToken, tgOptions)`

Sends a message to Telegram.

- `message` (string): The message string to be sent.
- `chatId` (string): The identifier of the chat to send the message to.
- `botToken` (string): The Telegram bot token used for sending the message.
- `tgOptions` (object): Optional. Additional options for the Telegram message. It has the following properties:
  - `parse_mode` (string): The formatting mode for the message. Possible values are 'Markdown', 'HTML', or 'None'.
  - `disable_web_page_preview` (boolean): Whether to disable the web page preview for the message.

Returns a Promise that will be fulfilled after the message is successfully sent or rejected in case of an error.

#### Example

```javascript
// Example usage with custom options
const customTgOptions = {
  parse_mode: 'Markdown',
  disable_web_page_preview: false,
};

sendTelegramMessage('Hello from lexxxell/send-telegram-message with custom options!', chatId, botToken, customTgOptions)
  .then(() => console.log('Message sent successfully!'))
  .catch((error) => console.error('Error sending message:', error));
```

### Note

This library uses the `https` module from Node.js to make requests to the Telegram Bot API. Make sure your environment supports this module.
