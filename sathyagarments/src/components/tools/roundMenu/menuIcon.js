import { withStyles } from "@material-ui/styles";
import style from "./style";

function icon(props) {
  const { classes } = props;
  console.log(props.src);
  return <img className={classes.round} src={props.src} alt="icon" />;
}

export default withStyles(style)(icon);
