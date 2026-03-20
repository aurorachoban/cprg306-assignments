import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getItems(userId) {
  const itemsRef = db.collection("users").doc(userId).collection("items");
  const snapshot = await itemsRef.get();
  const items = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

export async function addItem(userId, item) {
  const itemsRef = db.collection("users").doc(userId).collection("items");
  const docRef = await itemsRef.add(item);
  return docRef.id;
}