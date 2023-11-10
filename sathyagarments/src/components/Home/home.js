import { useEffect, useState } from "react";
import Navbar from "../tools/Nav/Navbar.js";
import { withStyles } from "@material-ui/styles";
import style from "./style.js";
import { v4 } from "uuid";
import images from "../../images/images.js";
import Map from "../tools/map/map.js";
import Menu from "./menu.js";

function Home(props) {
  const { classes } = props;
  const [offers, setOffer] = useState();
  const [current, setCurrent] = useState(0);
  const [data, setdata] = useState(false);

  function dataFetch() {
    return fetch("http://localhost:8000/offers", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleChannel(evt) {
    if (evt.target.id === "forward") {
      setCurrent(
        current > 0 ? (current - 1) % images.length : images.length - 1
      );
    } else {
      setCurrent((current + 1) % images.length);
    }
  }

  useEffect(() => {
    dataFetch().then((res) => {
      res.json().then((data) => {
        setdata(true);
        setOffer(data);
      });
    });
  }, []);

  useEffect(() => {
    function carousel() {
      setCurrent((current) => {
        return (current + 1) % images.length;
      });
    }
    let interval = setInterval(carousel, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.home}>
      {!data ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Navbar />
          <Menu />
          <div className={classes.carousel}>
            <button
              className={classes.carouselBtn}
              id="forward"
              onClick={handleChannel}
            >{`<`}</button>
            {images.map((k, ind) => {
              return (
                <div
                  className={`${
                    ind === current ? classes.active : classes.hidden
                  } ${classes.carDiv}`}
                  key={v4()}
                >
                  <img alt="img" className={classes.carouselImg} src={k} />
                </div>
              );
            })}
            <button
              className={classes.carouselBtn}
              id="back"
              onClick={handleChannel}
            >{`>`}</button>
          </div>
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
