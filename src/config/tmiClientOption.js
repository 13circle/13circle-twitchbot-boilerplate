export default () => {
  const { HOSTUSER, BOTNAME, PASSWORD, CHANNEL1 } = process.env;

  const channels = [];
  
  if (!HOSTUSER || !BOTNAME || !PASSWORD || !CHANNEL1) {
    throw Error("No expected environment variables - No user file");
  }
  
  for(let i = 1; process.env[`CHANNEL${i}`]; i++) {
    channels.push(process.env[`CHANNEL${i}`]);
  }

  return {
    options: {
      debug: true,
    },
    connection: {
      cluster: "aws",
      reconnect: true,
    },
    identity: {
      username: BOTNAME,
      password: PASSWORD,
    },
    channels,
  };
};
