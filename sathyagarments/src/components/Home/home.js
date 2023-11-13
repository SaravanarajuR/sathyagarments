import { useEffect, useState } from "react";
import Navbar from "../tools/Nav/Navbar.js";
import { withStyles } from "@material-ui/styles";
import style from "./style.js";
import Map from "../tools/map/map.js";
import Menu from "./menu.js";
import Carousel from "../tools/Carousel/carousel.js";

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
    <div className={classes.home}>
      {!data ? (
        <h1>Loading</h1>
      ) : (
        <div className={classes.parent}>
          <Navbar />
          <Menu />
          <Carousel />
          <div className={classes.map}>
            <h1>
              Style Destination: <br />
              Your Map to Fashion Finesse!
            </h1>
            <Map />
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(style)(Home);
