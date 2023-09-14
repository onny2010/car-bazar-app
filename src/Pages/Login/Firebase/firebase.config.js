import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDRPYImmqMqb4sk-xnVJoK-FG3AhqK_aoY",
  authDomain: "car-bazar-33746.firebaseapp.com",
  projectId: "car-bazar-33746",
  storageBucket: "car-bazar-33746.appspot.com",
  messagingSenderId: "320488673477",
  appId: "1:320488673477:web:cc6c4fe6776e794b70a0ac"
};
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;

