import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

export const getOutfitsInternal = async () => {
  const outfits = await admin.firestore().collection("outfits").get();
  return outfits.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getOutfits = functions.https.onRequest(async (req, res) => {
  const outfitsList = await getOutfitsInternal();
  res.json(outfitsList);
});
