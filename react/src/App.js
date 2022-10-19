import React, { useEffect, useState } from "react";

import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import ContactForm from "./Components/ContactForm";
import NavigationBar from "./Components/NavigationBar";
import FormAccount from "./Components/FormAccount";
import NewAccount from "./Components/NewAccount";
import PurchasePicture from "./Components/PurchasePicture";
import SummaryPurchase from "./Components/SummaryPurchase";

import { initializeApp } from "firebase/app";

import { getFirestore, getDocs, collection } from "firebase/firestore";

import { Switch, Route } from "react-router-dom";

import { useHistory } from "react-router-dom";

export default function App() {
  const [emailData, setEmailData] = useState(null);
  const [joinIn, setJoinIn] = useState(false);

  const [pictures, setPictures] = useState([]);

  const history = useHistory();

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD1CzYN-NJLSD9ZI3MXqOY2kwLQH7DUDoY",
    authDomain: "maia-project-94bab.firebaseapp.com",
    projectId: "maia-project-94bab",
    storageBucket: "maia-project-94bab.appspot.com",
    messagingSenderId: "932691428198",
    appId: "1:932691428198:web:9d4b0b707c30bada467ea7",
    measurementId: "G-VM5FTZLZP9",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const getPictures = async () => {
    const db = getFirestore(app);

    const picturesCollection = collection(db, "pictures");

    const querySnapshot = await getDocs(picturesCollection);

    const newPictures = [];

    querySnapshot.forEach((doc) => {
      const pictureData = { ...doc.data(), id: doc.id };

      newPictures.push(pictureData);
    });
    setPictures(newPictures);
  };

  useEffect(() => getPictures, []);

  const checkLogged = () => {
    const loggedUser = localStorage.getItem("user");

    if (loggedUser) {
      setJoinIn(true);

      const user = JSON.parse(loggedUser);

      setEmailData(user.userEmail);
    } else {
      setJoinIn(false);
    }
  };

  useEffect(checkLogged, []);

  const handleUserEmail = (dataEmail) => {
    setJoinIn(dataEmail);
  };

  const handleJoinIn = () => {
    setJoinIn(true);
  };

  const handleUserEmailContact = (userEmailContact) => {
    setEmailData(userEmailContact);
    setJoinIn(true);
  };

  const handleNewAccount = (newAccount) => {
    setEmailData(newAccount);
    setJoinIn(true);
  };

  const logOutButton = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("account");
    setEmailData("");
    setJoinIn(false);
    history.push("/");
  };

  return (
    <>
      <NavigationBar
        emailData={emailData}
        joinIn={joinIn}
        logOutButton={logOutButton}
      />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/portfolio">
          <Portfolio pictures={pictures} />
        </Route>

        <Route path="/contactform">
          <ContactForm />
        </Route>

        <Route path="/formaccount">
          <FormAccount
            app={app}
            handleUserEmailContact={handleUserEmailContact}
          />
        </Route>

        <Route path="/newaccount">
          <NewAccount
            handleUserEmail={handleUserEmail}
            handleJoinIn={handleJoinIn}
            app={app}
            handleNewAccount={handleNewAccount}
          />
        </Route>

        <Route path="/purchasepicture">
          <PurchasePicture joinIn={joinIn} />
        </Route>

        <Route path="/summarypurchase">
          <SummaryPurchase></SummaryPurchase>
        </Route>
      </Switch>
    </>
  );
}
