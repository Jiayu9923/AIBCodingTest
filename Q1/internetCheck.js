const http = require('http');
const https = require('https');
const readline = require('readline');

/**
 * Check internet connection conditions
 * @param {string} uri - URL to check
 * @returns {Promise<string>} - "good", "fine", "terrible" or error message
 */
function checkConnectionCondition(uri) {
    return new Promise((resolve) => {
        let parsedUrl;
        // Parse the URL and catch error
        try {
            parsedUrl = new URL(uri);
        } catch (error) {
            // Return error message if the URL is invalid
            resolve(`Error: ${error.message}`);
            return;
        }

        const protocol = parsedUrl.protocol === 'https:' ? https : http;

        const options = {
            method: 'GET',
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname + (parsedUrl.search || ''),
            port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
            timeout: 5000,
        };

        const startTime = Date.now();

        const req = protocol.request(options, (res) => {
            // Calculate the response time once receive the response
            const elapsedTime = Date.now() - startTime;
            // Only focus on response time, no response body content
            res.on('data', () => { /* Nothing */ });
            res.on('end', () => {
                if (elapsedTime < 500) {
                    resolve('good');
                } else if (elapsedTime < 5000) {
                    resolve('fine');
                } else {
                    resolve('terrible');
                }
            });
        });

        req.on('error', () => {
            resolve('terrible');
        });

        req.on('timeout', () => {
            req.destroy();
            resolve('terrible');
        });

        req.end();
    });
}

// Create readline interface
const url = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Let the user enter URL
url.question('Enter URL (For example：https://www.aibuild.com): ', async (inputUrl) => {
    const status = await checkConnectionCondition(inputUrl.trim());
    console.log(`Internet connection status: ${status}`);
    url.close();
});
