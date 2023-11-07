import { withStyles } from "@material-ui/styles";
import style from "./style.js";
import { Link } from "react-router-dom";

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.nav}>
      <p className={classes.name}>
        <span className={classes.span}>Sathya </span>Garments
      </p>
      <div className={classes.linkdiv}>
        <Link to="/about" className={classes.links}>
          About Us
        </Link>
        <span className={classes.span}>|</span>
        <Link to="/products" className={classes.links}>
          Our Products
        </Link>
        <span className={classes.span}>|</span>
        <Link to="/offers" className={classes.links}>
          Offers
        </Link>
        <span className={classes.span}>|</span>
      </div>
    </div>
  );
}

export default withStyles(style)(Nav);
