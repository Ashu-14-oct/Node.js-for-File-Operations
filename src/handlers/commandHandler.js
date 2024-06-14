const EventEmitter = require('events');
const createFile = require('../commands/createFile');
const deleteFile = require('../commands/deleteFile');
const renameFile = require('../commands/renameFile');
const addToFile = require('../commands/addToFile');

class FileCommandHandler extends EventEmitter {
    constructor() {
        super();
        this.COMMANDS = {
            CREATE_FILE: "create a file",
            DELETE_FILE: "delete a file",
            RENAME_FILE: "rename the file",
            ADD_TO_FILE: "add to the file"
        };
    }

    async processCommand(command) {
        const { CREATE_FILE, DELETE_FILE, RENAME_FILE, ADD_TO_FILE } = this.COMMANDS;

        if (command.startsWith(CREATE_FILE)) {
            const filePath = command.substring(CREATE_FILE.length + 1).trim();
            await createFile(filePath);
        } else if (command.startsWith(DELETE_FILE)) {
            const filePath = command.substring(DELETE_FILE.length + 1).trim();
            await deleteFile(filePath);
        } else if (command.startsWith(RENAME_FILE)) {
            const idx = command.indexOf(" to ");
            const oldFilePath = command.substring(RENAME_FILE.length + 1, idx).trim();
            const newFilePath = command.substring(idx + 4).trim();
            await renameFile(oldFilePath, newFilePath);
        } else if (command.startsWith(ADD_TO_FILE)) {
            const idx = command.indexOf(" this content: ");
            const filePath = command.substring(ADD_TO_FILE.length + 1, idx).trim();
            const content = command.substring(idx + 15).trim();
            await addToFile(filePath, content);
        } else {
            console.log("Unknown command");
        }
    }
}

module.exports = FileCommandHandler;
