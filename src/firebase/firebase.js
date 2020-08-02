import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL, //OK with yarn test -> test db is used
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
//database.ref("expenses").on("child_removed", (snapshot) => {
//  console.log(snapshot.key, snapshot.val());
//});
// child_added
//database.ref("expenses").on("child_added", (snapshot) => {
//  console.log(snapshot.key, snapshot.val());
//});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

/*database.ref("expenses").push({
  description: "Rent",
  note: "",
  amount: 109500,
  createdAt: 976123498763,
});*/

/*database.ref("expenses").push({
  description: "Phone bill",
  note: "",
  amount: 5900,
  createdAt: 976123498763,
});
database.ref("expenses").push({
  description: "food",
  note: "",
  amount: 1200,
  createdAt: 976123498763,
});*/

//database.ref("notes/-MBUpVgeFiVzt9aLyTrh").remove();

/*database.ref("notes").push({
  title: "Course Topics",
  body: "React Native, Angular, Python",
})*/

/*database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
})*/

//148-8 -> NOK
/*const onValueChange = database.ref().on("value",(snapshot)=>{
  console.log(snapshot.val());
},(e)=>{
  console.log('Error with data fetching', e);
});*/

//148-4 OK -8-9-NOK
/*const onValueChange = database.ref().on("value", (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref("age").set(29);
}, 3500);

setTimeout(() => {
  database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
  database.ref("age").set(30);
}, 10500);*/

//148-2
/*database.ref('location/city')
.once('value')
.then((snapshot)=>{
  const val= snapshot.val();
  console.log(val);
})
.catch((e)=>{
  console('Error fetching data', e);
});*/

//test the connection
/*database
  .ref()
  .set({
    name: "Alfonse Veloce",
    age: 26,
    stressLevel:6,
    job:{
      title:'Software developer',
      company:'Google'
    },
    location: {
      city: "Philadelphia",
      country: "United States",
    },
  })
  .then(() => {
    console.log("Data is saved!");
  })
  .catch((e) => {
    console.log("This is failed.", e);
  });*/

/*database.ref().update({
  stressLevel:9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});*/
