import { addOutfit } from "./addOutfits";
import { getOutfits } from "./getOutfit";
import { runTests } from "./runTests";
import * as admin from "firebase-admin";

const serviceAccount = require("../service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

if (process.argv.length > 4 && process.argv?.[4].includes("test")) {
  runTests();
}

export { addOutfit, getOutfits };
