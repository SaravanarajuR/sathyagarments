import { withStyles } from "@material-ui/styles";
import styles from "./Style";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

function Login(props) {
  const { classes } = props;
  const navigate = useNavigate();
  return (
    <div className={classes.parent}>
      <p className={classes.name}>
        <span className={classes.span}>Sathya </span>Garments
      </p>
      <div className={classes.signup}>
        <img className={classes.icon} src={logo} alt="logo" />
        <h2 className={classes.headText}>Welcome back</h2>
        <form className={classes.form} action="/login" method="post">
          <input
            autoComplete="off"
            name="mail"
            className={classes.input}
            placeholder="mail"
          />
          <input
            name="password"
            className={classes.input}
            placeholder="password"
            autoComplete="off"
          />
          <button className={classes.btn}>Login</button>
          <p
            className={classes.text}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Register instead
          </p>
        </form>
      </div>
    </div>
  );
}

export default withStyles(styles)(Login);
