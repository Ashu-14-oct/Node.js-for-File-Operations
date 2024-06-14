const fs = require('fs/promises');

const addToFile = async (filePath, content) => {
    try {
        await fs.writeFile(filePath, content, { flag: 'a' });
        console.log("File written successfully");
    } catch (error) {
        console.log("File does not exist");
    }
};

module.exports = addToFile;
