const fs = require('fs/promises');

const deleteFile = async (path) => {
    try {
        await fs.unlink(path);
        console.log("File deleted successfully");
    } catch (error) {
        console.log("File does not exist");
    }
};

module.exports = deleteFile;