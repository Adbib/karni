import React, { useEffect, useRef, useState } from "react";
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
  addDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import "firebase/compat/firestore";
import "firebase/compat/auth";
import SocialShare from "../components/SocialShare";
import UserLocation from "../hooks/useUserLocation";
import useCache from "../hooks/useCache";
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
  const [isDone, setIsDone] = useState<string | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const divRef = useRef<any>(null);
  const [cached, setCache] = useCache({ clicked: false });
  // console.log(typeof cached.clicked);
  // console.log(cached, setCache);
  const onProfile = (response: any) => {
    // console.log("Get Profile Success!", response);
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
    // console.log("newData", docSnap1.data());
    if (docSnap1.data().LastOne) {
      setCounter(docSnap1.data().LastOne);
      setClicked(true);
      setCache({ clicked: true });
    }
  };
  const handleCtribute = async () => {
    const [loaction, setLocation] = await UserLocation();
    // console.log(loaction.ip);

    const querySnapshot = await getDocs(collection(db, "users"));
    const ips: any = [];
    querySnapshot.forEach(async (doc) => {
      ips.push(doc.data().ip);
    });
    // console.log(ips);
    if (
      (ips.length >= 1 && ips.includes(loaction.ip)) ||
      (cached && cached.clicked)
    ) {
      console.log(2);
      alert("أنت مشارك من قبل");
    } else {
      console.log(2);
      const docRef = await addDoc(collection(db, "users"), {
        ip: loaction.ip,
      });

      divRef.current.style =
        "animation: shake 0.5s;animation-iteration-count:1";
      divRef.current.style.backgroundColor = "green";
      setIsDone("أنا مشارك!");
      updateCounter();
    }
  };
  useEffect(() => {
    getCounter();
    UserLocation();
  }, []);
  return (
    <div className="content">
      <Container>
        <Row
          style={{ textAlign: "center" }}
          className="first-row d-flex justify-content-md-center justify-content-sm-center align-items-center"
        >
          {!login && (
            <>
              <p style={{ width: "80%" }}>
                <a href="#"> #تحدي_الكارني </a>
                خلص كريدي الحانوت على إنسان محتاج! إلى قررتي تشارك كليكي على هاد
                البوطونة، باش الرقم يبقا يكبر، والناس يعرفو راه باقي الخير
                فالدنيا، ويتشجعو ناس كثار حتى هوما يشاركو. عتق الناس من كريدي
                الحانوت، وفرج الكربة ديالهم، واالله يتقبل ويثبت الأجر.
              </p>
              <a
                ref={divRef}
                id="loginBtn"
                className="loginBtn"
                style={
                  isDone
                    ? { backgroundColor: "green !important" }
                    : { backgroundColor: "#ff4c29 !important" }
                }
                onClick={handleCtribute}
                href="#"
              >
                {isDone == "أنا مشارك!" ? "أنا مشارك!" : "شارك"}
              </a>
            </>
          )}
          {counter ? (
            <h1 className="mosharikText"> {counter} مشارك</h1>
          ) : (
            <Loading />
          )}
        </Row>
        <Row className="row-social">
          <SocialShare />
        </Row>
      </Container>
    </div>
  );
}
