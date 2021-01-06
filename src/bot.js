import tmi from "tmi.js";
import say from "say";

import config from "./config";

const prefix = config.getPrefix();
const tmiClientOption = config.tmiClientOption();

const client = new tmi.Client(tmiClientOption);

client.connect();

client.on("connected", (address, port) => {
  tmiClientOption.channels.forEach((channel) => {
    client.say(channel, `안녕하세요, 챗봇입니다! Hi, this is your chatbot!`);
  });
});

client.on("join", (channel, username, self) => {
  if (self) return;
  client.say(
    channel,
    `안녕하세요, ${username}님! 방송 재미있게 봐주시고 팔로우 부탁드립니다! Hi, ${username}! Hope you enjoy and follow my stream!`
  );
});

client.on("chat", (channel, user, message, self) => {
  if (self) return;

  const args = message.slice(prefix.length).trim().split(new RegExp(" +", "g"));
  const cmd = args.shift().toLowerCase();

  try {
    say.speak(message);
  } catch (e) {
    console.log(e);
  }
});
