import { ref, get, child } from "firebase/database";
import database from "../data/firebase";

export const firebaseGetOne = async (id) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `digirn2/${id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
  } catch (error) {
    console.error(error);
  }
};
