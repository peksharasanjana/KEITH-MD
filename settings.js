// Bot settings

// You don't have to set this if you deploy using Heroku because you can simply set them in environment variables. Also, don't forget to sleep.

const session = process.env.SESSION |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtjMThMaGlrb0dGZTJzRUNrODhVTHkxVkY4QXA0Y1JyaHpsU1pGSXVFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU12NUdkSHkrcmFQZ085TGxoODNMRSszNW5qaWFqdUhLRTVNZjFYMXhsUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQ3BLNkF1VnMzOUNxUzNjZmY0ZWZKN01zUjRKWGpCRVE2Y1VvLzZ2ejE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEa0ZldURiRGNhTEZSRkhTMTVUZ0owVFdrWlVsNTk3QmtxZStwd0lKbnhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVObjQvYmVtSWR4dmUyUGhveGdVN1JSeHN4VmtmRWVtU1BZdStVSkEwVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InphWFFFaXB3SHB1aTRvS0dzdFl6aVBQYWFwQW1pNFY5TUZ2c25FeG1iRTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0laQjlPRWZIazVyVGxIK2RRV1IycGlWOG5nRm8xcE5xdG5YcngrWEFHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xOdVYwaTNXSjNqdWN5UkhnazFjZEI0ZHhFaU05UERNT0IvaE05VWFFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM5dkg2M0pPVHdpd2c2cGQ2U05FSjJqZ0ZENmV5V2F0cEU5bWRSdUJaVCt5ekpYUnVCMXdQR0RVNmpvNkNuMUh0QUFiOUtRWDVjWnhYL1FaU3RpdURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6InZjKzMwRnNrSHlSS1BWLzhkMjRwNmZxc212aEE4QUJtVmU3bDJPUGk3Sk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhIVzk1THJjU09xQnZXcV9TMGs0SmciLCJwaG9uZUlkIjoiMTc4YzkzMjAtYTZmNy00YTU5LWEwMTYtYzg3ODI5ZWI1OTZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndBelV4OVZZM1BUdUlUREhxb3FadUtxREhLcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXZElqRWh0eG00ZlVUZ240QTR0MnJnMGYzVTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWExKOVNCS1EiLCJtZSI6eyJpZCI6Ijk0Nzc0Mzk3MTU3Ojg3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNWFkwdUFFRUxHcjFiNEdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNbjZyaDhPQzEzSndiWitweEprK2xqdGMyd0NpWUVUZTJLRmFpeDNGbG1rPSIsImFjY291bnRTaWduYXR1cmUiOiJWOHBpQU13UFN4UWFHemNVVXB5T1pMam9lN0RTZWVSMk1zc2hIVlZtNEdCS2RTdmlBZmFWRStzMkpaRlUwOEg0QnFjQm9nSGx1ZnMwUkJReG1Hc1VEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT004VnNjMTNBTUJoMk5qb0QyY1c3dGVZRExDdFlISkxFaGJ2WEJ5WlZPcFNhQnBNNXJmZEhZNEV1a1pxVGdRSWhyYmorY3g2TGtYUTQrRmthaUNWQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NDM5NzE1Nzo4N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSitxNGZEZ3RkeWNHMmZxY1NaUHBZN1hOc0FvbUJFM3RpaFdvc2R4WlpwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQyMDM0MzY3fQ==| '';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete,
};
