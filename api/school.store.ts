import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref } from 'firebase/database';
import School from './stores/school.model';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  appID: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export const getSchools = async () => {
  let schoolsData: School[] = [];
  const databaseRef = ref(database);
  await get(child(databaseRef, 'schools/'))
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
