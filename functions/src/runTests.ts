import { addOutfitInternal } from "./addOutfits";
import { getOutfitsInternal } from "./getOutfit";

export const runTests = async () => {
  console.log("Running tests");
  await addOutfitInternal();
  await getOutfitsInternal();
};
