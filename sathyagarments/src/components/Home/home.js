import { useEffect, useState } from "react";
import Navbar from "../templates/Nav/Nav.js";

function Home(props) {
  const [offers, setOffer] = useState();
  const [data, setdata] = useState(false);
  function dataFetch() {
    return fetch("http://localhost:8000/offers", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  useEffect(() => {
    dataFetch().then((res) => {
      res.json().then((data) => {
        setdata(true);
        setOffer(data);
      });
    });
  }, []);
  return (
    <div>
      {!data ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default Home;
