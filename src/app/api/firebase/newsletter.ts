import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './config';  // Firebase initialization

// Function to check if an email already exists in the "newsletter" collection
export const checkIfEmailExists = async (email: string): Promise<boolean> => {
  const q = query(collection(db, "newsletters"), where("email", "==", email));
  const querySnapshot = await getDocs(q);

  // If querySnapshot is not empty, the email exists
  return !querySnapshot.empty;
};

// Function to add an email to the "newsletter" collection
import { doc, setDoc } from "firebase/firestore";

// Save email to the "newsletters" collection
export const saveEmail = async (email: string) => {
  // Use email as document ID, but you need to sanitize it to avoid issues
  const emailRef = doc(db, "newsletters", email); // use the email as the document ID

  // Set the email field in the document
  await setDoc(emailRef, { email });
};
