const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "233591467330"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Ghana/Accra";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,233591467330";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233591467330";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,233xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233591467330,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_56_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgODMsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTksXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDYyLFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJadVFhaVhiSEViZ1lsSEl3SWVlYVVudTdPQW9lSjBTTHhUOVl1dkRIeWZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiODF3dDJQelRicTZPazk0aElRODl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiZmZjMDBhLTMyN2ItNGE1NS04NTA5LWEzNTNkZTM5YjJjNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDE2MyxcbiAgICAgIDEzLFxuICAgICAgMTk1LFxuICAgICAgNzcsXG4gICAgICAyMzgsXG4gICAgICA1NixcbiAgICAgIDQ2LFxuICAgICAgMTQ2LFxuICAgICAgMjMzLFxuICAgICAgMjQxLFxuICAgICAgNzgsXG4gICAgICA4MyxcbiAgICAgIDEzOSxcbiAgICAgIDMsXG4gICAgICAxMjQsXG4gICAgICAxNDgsXG4gICAgICAxMzIsXG4gICAgICAxMjcsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDE2NSxcbiAgICAgIDg4LFxuICAgICAgOTYsXG4gICAgICAxNjQsXG4gICAgICAyNDQsXG4gICAgICAxMTgsXG4gICAgICAxMTgsXG4gICAgICAxMTgsXG4gICAgICAyOCxcbiAgICAgIDExMSxcbiAgICAgIDIwNyxcbiAgICAgIDk2LFxuICAgICAgMTM3LFxuICAgICAgMjI4LFxuICAgICAgMjQzLFxuICAgICAgMTc3LFxuICAgICAgMTQsXG4gICAgICAxODgsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUTThOWFlUMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTkxNDY3MzMwOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QkfCdkJHwnZCJIPCdkajwnZGr8J2RulwiLFxuICAgIFwibGlkXCI6IFwiMjY1OTEwMDE1Mjg3NDgyOjQ2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Bmcy81TUJFSkRUenJFR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVpaM0FVWWNnSVpBU3ZCbk1IUzNhZ0hLTkRCM2d3MXJINUE2cDRmS25rTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUc3liZGlBWUJEZ202VWc3c25vZHJERjdqRVVMMjA3RFVQUVkweFNJenVRNGRxUjNoZ1dlUFYvUEM2eTlhSDE4Z2ozRkRpZTB4OTM1dllmMGl4SllEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXN0pMSUVEYisyWWc1NGhTNXpzRi9ab0JTMFdMQW1WN1RwZlpaZkREelJ5NlJuTWtXSE4ydVJUT3A2bWxYSVlRRXVMTWk5Sms0N3gvVG1nSkhPZldCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1OTE0NjczMzA6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ2NjE3ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFWEpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVYSi5qc29uIjogIntcImtleURhdGFcIjpcImYzSjUrUVdkdU1IRVl6SWs0bkZ2NnZVa3lvSjFKd1ZJZ0I0djgvRGxGdXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzEwMzc2MDU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ2NDg4NTc2MzNcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
