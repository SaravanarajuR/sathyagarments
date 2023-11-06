import { useEffect, useState } from "react";

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
        return () => {
          setOffer(data);
          setdata(true);
        };
      });
    });
  }, []);
  return (
    <div>
      {!data ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {offers.map((k) => {
            return <img src={k.url} alt="offer" />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
