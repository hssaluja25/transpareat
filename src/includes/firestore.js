import { db, getDoc, setDoc, doc } from '@/includes/firebase.config.js'

// Called when the user is creating a new account
async function addToFirestore(role, docId) {
    await setDoc(doc(db, "users", docId), {
        role: role
    });
}

// Invoked when the user is logging in
async function checkFirestore(role, docId) {
    const docRef = doc(db, "users", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data().role == role;
    } else {
        throw new Error("Somehow the role was not set but the account was created. This should not be possible. This line should never execute.")
    }
}

export {
    addToFirestore, checkFirestore
}