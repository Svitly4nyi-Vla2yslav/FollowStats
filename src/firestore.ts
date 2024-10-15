import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const saveUserData = async (userData: unknown) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
