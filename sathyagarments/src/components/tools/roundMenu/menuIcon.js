import { withStyles } from "@material-ui/styles";
import style from "./style";

function icon(props) {
  const { classes } = props;
  return <img className={classes.round} src={props.url} alt="icon" />;
}

export default withStyles(style)(icon);
