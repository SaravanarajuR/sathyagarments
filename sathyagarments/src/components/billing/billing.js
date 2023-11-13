import { useEffect, useState } from "react";
import style from "./style.js";
import { withStyles } from "@material-ui/styles";

function Billing(props) {
  const { classes } = props;
  const [prod, addProd] = useState();

  useEffect(() => {
    document.addEventListener("keypress", (evt) => {
      if (evt.key === "a") {
        console.log("a");
      }
    });
  }, []);

  return (
    <div className={classes.parent}>
      <button className={classes.btn}>Add+</button>
    </div>
  );
}

export default withStyles(style)(Billing);
