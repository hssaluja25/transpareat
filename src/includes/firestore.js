import { db, getDoc, setDoc, doc, deleteUser, auth } from '@/includes/firebase.config.js'

// Called when the user is creating a new account
async function addToFirestore(role, docId) {
    try {
        await setDoc(doc(db, "users", docId), {
            role: role
        });
    } catch (e) {
        console.log("User account created successfully. But there was an error setting the user's role.")
        console.log("In this case, we would delete user's account from Firebase Auth")
        const user = auth.currentUser;
        try {
            await deleteUser(user)
            console.log("User deleted successfully")
        }
        catch (error) {
            console.log("Could not delete the user")
        }
        throw new Error("User account created successfully. But could not store role. User account has hence, been deleted")
    }
}

// Invoked when the user is logging in
async function checkFirestore(role, docId) {
    const docRef = doc(db, "users", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data().role == role;
    } else {
        throw new Error("Somehow the role was not set but the account was created. This could have been possible only if after successful account creation and unsuccessful role creation, account deletion failed")
    }
}

export {
    addToFirestore, checkFirestore
}