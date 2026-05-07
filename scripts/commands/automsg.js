module.exports.config = {
  name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "farhan (modified by ChatGPT)",
  description: "msg",
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5,
  dependencies: {}
};

const NAME = "☆ 𝑨𝒔𝒔𝒂𝒍𝒂𝒎𝒖 ☆𝑨𝒍𝒂𝒊𝒌𝒖𝒎 📌\n\n「 ✦ 𝗦𝗛𝗔𝗞𝗜𝗟 ✦ 」";
const FB = "https://www.facebook.com/profile.php?id=61588886578862";

const nam = [
  {
    timer: '12:00:00 AM',
    message: [`${NAME}\n=== 「𝗖𝗹𝗼𝗰𝗸」 ===\nএখন রাত ১১টা বাজে সবাই সুয়ে পড়ো জেগে না থেকে🙅\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  },
  {
    timer: '1:00:00 AM',
    message: [`${NAME}\n=== 「𝗖𝗹𝗼𝗰𝗸」 ===\nএখন রাত ১২টা বাজে যাঁদের বউ আছে তারা বউকে জড়িয়ে ঘুমাও💫😇\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  },
  {
    timer: '2:00:00 AM',
    message: [`${NAME}\n=== 「𝗖𝗹𝗼𝗰𝗸」 ===\nএখন রাত ১টা বাজে সবাই মনে হয় ঘুমায় গেছে🥱\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  },
  {
    timer: '3:00:00 AM',
    message: [`${NAME}\n=== 「𝗖𝗹𝗼𝗰𝗸」 ===\nএখন রাত ২টা বাজে যারা ছ্যাকা খাইছে তারা জেগে আছে😒\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  },
  {
    timer: '4:00:00 AM',
    message: [`${NAME}\n=== 「𝗖𝗹𝗼𝗰𝗸」 ===\nএখন রাত ৩টা বাজে সবাই মনে হয় ঘুমাই🥹\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  },
  {
    timer: '5:00:00 AM',
    message: [`${NAME}\n=== 「𝗖𝗹𝗼𝗰𝗸」 ===\nএখন রাত ৪টা বাজে একটু পর ফজরের আযান দিবে নামাজ পড়ে নিও সবাই😽\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  },
  {
    timer: '5:05:00 AM',
    message: [`${NAME}\n🌸 𝐄𝐯𝐞𝐫𝐲 𝐌𝐮𝐬𝐥𝐢𝐦𝐬 𝐈𝐝𝐞𝐧𝐭𝐢𝐭𝐲 🌸\n\nCreator: Allah\nReligion: Islam\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  },
  {
    timer: '6:00:00 AM',
    message: [`${NAME}\nএখন ভোর ৫টা বাজে সবাই নামাজ পড়ছো তো?❤️\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  },
  {
    timer: '7:00:00 AM',
    message: [`${NAME}\nএখন সকাল ৬টা বাজে ঘুম থেকে উঠো দাঁত ব্রাশ করো সবাই🥱\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  },
  {
    timer: '8:00:00 AM',
    message: [`${NAME}\nএখন সকাল ৭টা বাজে সবাই ব্রেকফাস্ট করে নাও😊\n\n𝐅𝐁 𝐥𝐢𝐧𝐤: ${FB}`]
  }
];

module.exports.onLoad = o => {
  setInterval(() => {
    const now = new Date(Date.now() + 25200000)
      .toLocaleString()
      .split(/,/)
      .pop()
      .trim();

    const data = nam.find(i => i.timer === now);
    if (!data) return;

    const msg = data.message[Math.floor(Math.random() * data.message.length)];

    global.data.allThreadID.forEach(threadID => {
      o.api.sendMessage(msg, threadID);
    });
  }, 1000);
};

module.exports.run = o => {};
