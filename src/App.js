import React, { useState } from "react";

import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import ContactForm from "./Components/ContactForm";
import NavigationBar from "./Components/NavigationBar";
import FormAccount from "./Components/FormAccount";
import NewAccount from "./Components/NewAccount";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  const [emailData, setEmailData] = useState(null);
  const [joinIn, setJoinIn] = useState(false);

  const pictures = [
    {
      image: "image1.JPG",
      name: "",
      description: "",
    },
    {
      image: "image2.JPG",
      name: "",
      description: "",
    },
    {
      image: "image3.JPG",
      name: "",
      description: "",
    },
    {
      image: "image4.JPG",
      name: "",
      description: "",
    },
    {
      image: "image5.JPG",
      name: "",
      description: "",
    },
    {
      image: "image6.JPG",
      name: "",
      description: "",
    },
    {
      image: "image7.JPG",
      name: "",
      description: "",
    },
    {
      image: "image8.JPG",
      name: "",
      description: "",
    },
    {
      image: "image9.JPG",
      name: "",
      description: "",
    },
    {
      image: "image10.JPG",
      name: "",
      description: "",
    },
    {
      image: "image11.JPG",
      name: "",
      description: "",
    },
    {
      image: "image12.JPG",
      name: "",
      description: "",
    },
    {
      image: "image13.JPG",
      name: "",
      description: "",
    },
    {
      image: "image14.JPG",
      name: "",
      description: "",
    },
    {
      image: "image15.JPG",
      name: "",
      description: "",
    },
    {
      image: "image16.JPG",
      name: "",
      description: "",
    },
    {
      image: "image17.JPG",
      name: "",
      description: "",
    },
    {
      image: "image18.JPG",
      name: "",
      description: "",
    },
    {
      image: "image19.JPG",
      name: "",
      description: "",
    },
    {
      image: "image20.JPG",
      name: "",
      description: "",
    },
    {
      image: "image21.JPG",
      name: "",
      description: "",
    },
    {
      image: "image22.JPG",
      name: "",
      description: "",
    },
    {
      image: "image23.JPG",
      name: "",
      description: "",
    },
  ];

  const handleUserEmail = (dataEmail) => {
    setEmailData(dataEmail);
  };

  const handleJoinIn = () => {
    setJoinIn(true);
  };

  return (
    <>
      <BrowserRouter>
        <NavigationBar emailData={emailData} joinIn={joinIn} />

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
            <FormAccount />
          </Route>

          <Route path="/newaccount">
            <NewAccount
              handleUserEmail={handleUserEmail}
              handleJoinIn={handleJoinIn}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
