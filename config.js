const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=i6xDgI5L#gmTG9B050siUJDxH3IyUZxueo6by1OxkvhzT3QundWw",
MONGODB: process.env.MONGODB || "mongodb+srv://nadu:09hxVnNovnrgwiPr@cluster0.y30bp.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
