import dotenv from "dotenv";

import tmiClientOption from "./tmiClientOption";
import getPrefix from "./getPrefix";

dotenv.config();

const { HOSTUSER } = process.env;

if(!HOSTUSER) {
  throw Error("No expected environment variables: USERNAME");
}

dotenv.config({ path: `.${HOSTUSER}.env` });

export default {
  tmiClientOption,
  getPrefix,
};
