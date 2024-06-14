const fs = require('fs/promises');

const renameFile = async (oldFilePath, newFilePath) => {
    try {
        await fs.rename(oldFilePath, newFilePath);
        console.log("File renamed successfully!");
    } catch (error) {
        console.log("File does not exist", error);
    }
};

module.exports = renameFile;
