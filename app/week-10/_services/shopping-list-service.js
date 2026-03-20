import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
  const itemsRef = db.collection("users").doc(userId).collection("items");
  const snapshot = await itemsRef.get();
  const items = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

async function addItem(userId, item) {
  const itemsRef = db.collection("users").doc(userId).collection("items");
  const docRef = await itemsRef.add(item);
  return docRef.id;
}