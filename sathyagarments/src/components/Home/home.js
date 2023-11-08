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
    <div className={classes.home}>
      {!data ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Navbar />
          <div className={classes.carousel}>
            <img
              className={`${classes.carouselImg} ${classes.active}`}
              src="https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img"
            />
            <img
              className={`${classes.carouselImg} ${classes.hidden}`}
              src="https://images.pexels.com/photos/3709399/pexels-photo-3709399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(style)(Home);
