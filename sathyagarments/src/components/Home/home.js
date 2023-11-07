import { useEffect, useState } from "react";
import Navbar from "../tools/Nav/Navbar.js";
import { withStyles } from "@material-ui/styles";
import style from "./style.js";

function Home(props) {
  const { classes } = props;
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
    <div className={classes.home}>{!data ? <h1>Loading</h1> : <Navbar />}</div>
  );
}

export default withStyles(style)(Home);
