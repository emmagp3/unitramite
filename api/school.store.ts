import { initializeApp, getApps, getApp } from 'firebase/app';
import { child, get, getDatabase, ref } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import User from './stores/user.model';
import School from './stores/school.model';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  appID: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase();
const auth = getAuth();
const databaseRef = ref(database);

export const getSchools = async () => {
  let schoolsData: School[] = [];
  await get(child(databaseRef, 'data/schools/'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        schoolsData = snapshot.val();
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return schoolsData;
};

export const getSchoolsPaths = async () => {
  return (await getSchools()).map((school) => {
    return {
      params: {
        id: school.id,
      },
    };
  });
};

export const getSchoolData = async (id: string) => {
  const schoolsData = await getSchools();
  const schoolData = schoolsData.find((school) => id === school.id);
  return schoolData;
};

export const loginWithEmail = async (email: string, password: string) => {
  let user: User | undefined;

  await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const uid = userCredential.user.uid;
      await get(child(databaseRef, `data/users/${uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          user = snapshot.val();
        }
      });
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });

  return user;
};
