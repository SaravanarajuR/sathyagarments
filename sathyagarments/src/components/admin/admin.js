import { withStyles } from "@material-ui/styles";
import style from "./style.js";
import Navbar from "../tools/Nav/Navbar.js";
import Billing from "../billing/billing.js";

function Admin(props) {
  const { classes } = props;
  return (
    <div className={classes.parent}>
      <Navbar />
      <div className={classes.menu}>
        <p className={classes.menuItem}>Billing</p>
        <p className={classes.menuItem}>Manage Product</p>
        <p className={classes.menuItem}>Stock</p>
      </div>
      <div className={classes.billing}>
        <Billing />
      </div>
    </div>
  );
}

export default withStyles(style)(Admin);
