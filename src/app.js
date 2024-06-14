const FileCommandHandler = require('./handlers/commandHandler');
const watchFile = require('./utils/fileWatcher');

(async () => {
    const commandHandler = new FileCommandHandler();

    const commandFile = './command.txt';

    // Watch the command file and process commands on change
    await watchFile(commandFile, async (content) => {
        await commandHandler.processCommand(content);
    });
})().catch(console.error);
