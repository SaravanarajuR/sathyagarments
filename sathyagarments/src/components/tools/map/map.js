import styles from "./style";
import { withStyles } from "@material-ui/styles";

function map(props) {
  const { classes } = props;
  return (
    <iframe
      className={classes.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0422550330154!2d77.6445425!3d10.9601808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba99922b83d9a79%3A0x33c143a85780301f!2sSathya%20Garments.%20(%20Dsp%20Brand%20Innerwear%20showroom)!5e0!3m2!1sen!2sin!4v1699607859369!5m2!1sen!2sin"
      width="40%"
      height="90%"
      style={{ border: 0 }}
      loading="lazy"
      title="map"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default withStyles(styles)(map);
