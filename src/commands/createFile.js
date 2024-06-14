const fs = require('fs/promises');

const createFile = async (path) => {
    try {
        await fs.access(path);
        console.log("File already exists, try a new name");
    } catch (error) {
        await fs.writeFile(path, '');
        console.log("A new file was created successfully");
    }
};

module.exports = createFile;