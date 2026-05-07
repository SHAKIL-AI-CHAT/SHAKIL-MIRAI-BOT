const fs = global.nodemodule["fs-extra"];

module.exports.config = {
  name: "Bot",
  version: "0.0.3",
  permission: 0,
  prefix: false,
  credits: "𓆩𝗦𝗵𝗮𝗸𝗶𝗹𓆪",
  description: "talk with bot",
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:mm:ss L");

  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  const OWNER = "𓆩𝗦𝗵𝗮𝗸𝗶𝗹𓆪";

  var tl = [
    "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻",
    `আমি এখন বস ${OWNER}এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻`,
    `আমাকে না ডেকে আমার বস ${OWNER} কে একটা জি এফ দাও-😽🫶🌺`,
    "ঝাং থুমালে আইলাপিউ পেপি-💝😽",
    "উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈",
    "আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧",
    "ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦",
    `চুনা ও চুনা আমার বস ${OWNER} এর হবু বউ রে কেও খুঁজে পাচ্ছি না😪🤧😭`,
    `আমার বস ${OWNER} এর জন্য দোয়া করবেন-💝💚🌺🌻`,
    `ভালোবাসা নামক আব্লামি করতে চাইলে আমার বস ${OWNER} এর ইনবক্সে যাও-🙊🥱👅`,
  ];

  var rand = tl[Math.floor(Math.random() * tl.length)];

  // MAIN TRIGGER
  if (event.body?.toLowerCase().startsWith("bot")) {
    var msg = {
      body: `《𓆩٭${name}٭𓆪》 ${rand}`
    };
    return api.sendMessage(msg, threadID, messageID);
  }

  // LOVE YOU BOT
  if (
    ["love you bot", "love u bot", "bot love you", "bot love u"]
    .includes(event.body?.toLowerCase())
  ) {
    return api.sendMessage(`আমার বস ${OWNER} মেয়েদের সাথে কথা বলতে মানা করছে-🙂`, threadID);
  }

  // JAMAI
  if (
    ["bot jamay dau", "bot jamay daw", "বট জামাই দাও"]
    .includes(event.body?.toLowerCase())
  ) {
    return api.sendMessage(`আমার বস ${OWNER} কে চোখে দেখো না নাকি__😒🥱`, threadID);
  }

  // I LOVE YOU
  if (
    ["i love you bot", "bot i love you"]
    .includes(event.body?.toLowerCase())
  ) {
    return api.sendMessage(`আমাকে না আমার বস ${OWNER} কে ভালোবাসো-😻`, threadID);
  }

};

module.exports.run = function({ api, event, client, __GLOBAL }) {};
