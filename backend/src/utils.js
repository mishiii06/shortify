const crypto = require('crypto');

const generateShortId = () => {
    const length = 3; // Adjust the length of the shortId in bytes
    const shortId = crypto.randomBytes(length).toString('hex'); // Generates a random hex string

    return shortId;
};

module.exports = { generateShortId };
