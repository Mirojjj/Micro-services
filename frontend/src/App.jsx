import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [paymentData, setPaymentData] = useState("");
  const [authData, setAuthData] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/trendings/").then((response) => {
      response
        .json()
        .then(console.log(response))
        .then((data) => {
          setPaymentData(data);
        });
    });
  }, []);
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
  // useEffect(() => {
  //   fetch("https://127.0.0.1:8000/trendings").then((response) => {
  //     response
  //       .json()
  //       .then(console.log(response))
  //       .then((data) => {
  //         setPaymentData(data);
  //       });
  //   });
  // fetch("http://localhost:8001/").then((response) => {
  //   response
  //     .json()
  //     .then(console.log(response))
  //     .then((data) => {
  //       setAuthData(data);
  //     });
  // });

  return (
    <>
      tsss data from payment servicess bhawana <h1>{paymentData[0].Name}</h1>
      <br />
      {/* data from auth service <h1>{authData.message}</h1> */}
    </>
  );
}

export default App;
