import { withStyles } from "@material-ui/styles";
import Style from "./style.js";
import { v4 } from "uuid";
import images from "../../../images/images.js";
import { useState, useEffect } from "react";

function Carousel(props) {
  const { classes } = props;
  const [current, setCurrent] = useState(0);

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

  function handleChannel(evt) {
    if (evt.target.id === "forward") {
      setCurrent(
        current > 0 ? (current - 1) % images.length : images.length - 1
      );
    } else {
      setCurrent((current + 1) % images.length);
    }
  }

  return (
    <div className={classes.carousel}>
      <button
        className={classes.carouselBtn}
        id="forward"
        onClick={handleChannel}
      >{`<`}</button>
      {images.map((k, ind) => {
        return (
          <div
            className={`${ind === current ? classes.active : classes.hidden} ${
              classes.carDiv
            }`}
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
  );
}

export default withStyles(Style)(Carousel);
