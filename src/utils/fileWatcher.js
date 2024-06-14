const fs = require('fs/promises');

const watchFile = async (filePath, callback) => {
    let lastContent = "";

    const processFile = async () => {
        try {
            const content = await fs.readFile(filePath, 'utf8');
            if (content !== lastContent) {
                lastContent = content;
                await callback(content.trim());
            }
        } catch (error) {
            console.error("Error reading the command file:", error);
        }
    };

    // Initial file processing
    await processFile();

    // Watch for file changes
    const watcher = fs.watch(filePath);
    for await (const event of watcher) {
        if (event.eventType === 'change') {
            await processFile();
        }
    }
};

module.exports = watchFile;
