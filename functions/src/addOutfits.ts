import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

export const addOutfitInternal = async () => {
  const name = "OOTF";
  const writeResult = await admin
    .firestore()
    .collection("outfits")
    .add({ name: name });
  return { id: writeResult.id };
};

export const addOutfit = functions.https.onRequest(async (req, res) => {
  res.json(addOutfitInternal());
});
