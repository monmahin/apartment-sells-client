import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";
const initialFirebase = ()=>{
    initializeApp(firebaseConfig)
}
export default initialFirebase;