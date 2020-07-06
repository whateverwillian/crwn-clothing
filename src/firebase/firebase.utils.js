import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA0Wl8FWOMINEj6sUFlUNjOeZyzN-EqoWY",
  authDomain: "crwn-clothing-a1771.firebaseapp.com",
  databaseURL: "https://crwn-clothing-a1771.firebaseio.com",
  projectId: "crwn-clothing-a1771",
  storageBucket: "crwn-clothing-a1771.appspot.com",
  messagingSenderId: "740663329787",
  appId: "1:740663329787:web:e0094a00dee76d35c1015e",
  measurementId: "G-T60CXS4TB6"
};

firebase.initializeApp(config);


// QueryReference and QuerySnapshot

// QueryReference => é um objeto que representa aquela localização no banco de dados, é uma referencia
// à um lugar no banco de dados
// Essa Reference nos usamos para dizer ao firestore a localizacao que queremos pegar os dados, ou inserir os dados
// A reference em si não possui os dados, é apenas uma referência
// obs: nós recebemos o snapshotObject quando utilizamos o metodo .get no documentRef

// DOCUMENT REFERENCE => Para performar as CRUD operations no nosso banco de dados

// Snapshot é uma representação dos dados, que vem com detalhes sobre os dados
// Para saber o real conteúdo utilizamos o método .data()
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('Error creating user', err.message)
    }
  }

  return userRef;
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })
  console.log(transformedCollection)

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(Obj => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, Obj);
  });

  await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;