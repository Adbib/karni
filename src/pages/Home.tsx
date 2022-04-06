import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../components/Loading";
import FacebookLogin from "@greatsumini/react-facebook-login";
import firebase from "firebase/compat/app";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import "firebase/compat/firestore";
import "firebase/compat/auth";
import SocialShare from "../components/SocialShare";
type Props = {};
type dataTypes = {
  name: string;
  email: string;
};
const firebaseConfig = {
  apiKey: "AIzaSyDZ-B_3Xx8Ds9D9v01JGmjJLSM6JitRNBE",

  authDomain: "karny-7c8ed.firebaseapp.com",

  projectId: "karny-7c8ed",

  storageBucket: "karny-7c8ed.appspot.com",

  messagingSenderId: "84443514969",

  appId: "1:84443514969:web:368b988625680f26698948",

  measurementId: "G-BSN37088LY",
};
export const firebase_app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

export default function Home({}: Props) {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState<dataTypes | null>(null);
  const [picture, setPicture] = useState("");
  const [counter, setCounter] = useState<number | null>(null);
  const onProfile = (response: any) => {
    console.log("Get Profile Success!", response);
    updateCounter();
    setData(response);
    setLogin(true);
    return 0;
  };
  const getCounter = async () => {
    const docRef = doc(db, "counter", "WtZiEvwt1TiIeTPRY9br");
    const docSnap: any = await getDoc(docRef);
    console.log(docSnap.data());
    setCounter(docSnap.data().LastOne);
  };

  const updateCounter = async () => {
    const batch = writeBatch(db);
    const docRef = doc(db, "counter", "WtZiEvwt1TiIeTPRY9br");
    const docSnap: any = await getDoc(docRef);
    batch.update(docRef, { LastOne: docSnap.data().LastOne + 1 });
    await batch.commit();
    const docSnap1: any = await getDoc(docRef);
    console.log("newData", docSnap1.data());
    if (docSnap1.data().LastOne) {
      setCounter(docSnap1.data().LastOne);
    }
  };

  useEffect(() => {
    getCounter();
  }, []);
  return (
    <div className="d-flex justify-content-md-center align-items-center vh-100">
      <Container>
        <Row
          style={{ textAlign: "center" }}
          className=" justify-content-md-center justify-content-sm-center align-items-center"
        >
          {!login && (
            <FacebookLogin
              appId="729264435106871"
              onSuccess={(response) => {
                console.log("Login Success!");
              }}
              onFail={(error) => {
                console.log("Login Failed!", error);
              }}
              style={{
                background: "#FF6326 !important",
                border: "none !important",
                padding: 20,
              }}
              onProfileSuccess={onProfile}
              render={({ onClick, logout }) => (
                <a
                  //   style={{
                  //     background: "#FF6326 !important",
                  //     border: "none !important",
                  //     padding: 20,
                  //   }}
                  className="loginBtn"
                  onClick={onClick}
                  //   onLogoutClick={}
                  href="#"
                >
                  شارك
                </a>
              )}
            />
          )}
          {counter ? <h1> {counter} مشارك</h1> : <Loading />}
          {login && <h1>{data && " على المشاركة " + data.name + " شكرا "} </h1>}
        </Row>
        <Row>
          <SocialShare />
        </Row>
      </Container>
    </div>
  );
}
