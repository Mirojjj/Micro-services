import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [paymentData, setPaymentData] = useState("");
  const [authData, setAuthData] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((resoponse) =>
  //     resoponse
  //       .json()
  //       .then(console.log(resoponse))
  //       .then((data) => {
  //         setData(data);
  //       })
  //   );
  // }, []);
  useEffect(() => {
    fetch("http://localhost:8000/").then((response) => {
      response
        .json()
        .then(console.log(response))
        .then((data) => {
          setPaymentData(data);
        });
    });
    fetch("http://localhost:8001/").then((response) => {
      response
        .json()
        .then(console.log(response))
        .then((data) => {
          setAuthData(data);
        });
    });
  }, []);

  useEffect(() => {
    fetch("");
  });

  return (
    <>
      data from payment servicess <h1>{paymentData.message}</h1>
      <br />
      data from auth service <h1>{authData.message}</h1>
    </>
  );
}

export default App;
