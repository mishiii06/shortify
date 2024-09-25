const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const error = require("../errors.json");
const { URLModel } = require("../models/url.model");
const { generateShortId } = require("../utils");


const baseUrl = process.env.BASEURI;

const generateUniqueShortId = async () => {
    let shortId;
    let existingURL;

    // creating a random string till we are getting same string in db
    do {
        shortId = generateShortId();
        existingURL = await URLModel.findOne({ urlCode: shortId });
    } while(existingURL)
    return shortId;
};

router.post("/shorten", async (req, res) => {
    const { longUrl, urlCode } = req.body;

    try {
        if (!validUrl.isUri(longUrl)) {
            return res.status(401).json({ error: error.INVALID_URL});
        }

        if (urlCode) {
            const existingCodeBookmark = await URLModel.findOne({ urlCode });

            if (existingCodeBookmark) {
                return res.status(400).json({ error: error.CODE_ALREADY_IN_USE });
            }
        }

        const existingURL = await URLModel.findOne({ longUrl });

        if (existingURL && !urlCode) {
            return res.json({ urlCode: existingURL.urlCode });
        }

        let generatedCode;
        if (!urlCode) {
            generatedCode = await generateUniqueShortId();
        } else {
            generatedCode = urlCode;
        }
        const shortUrl = `${baseUrl}/${generatedCode}`;

        const newURL = new URLModel({
            urlCode: generatedCode,
            longUrl,
            shortUrl,
        });
        await newURL.save();
        res.status(201).json({shortUrl});
    } catch (error) {
        console.error('Error shortening URL:', error);
        res.status(500).json({ error: 'Failed to shorten URL' });
    }
});

module.exports = router;