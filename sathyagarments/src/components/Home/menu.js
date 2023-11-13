import { v4 } from "uuid";
import { useEffect, useState } from "react";
import categories from "../../images/categories";
import { withStyles } from "@material-ui/styles";
import styles from "./style";
import RoundMenu from "../tools/roundMenu/menuIcon";

function Menu(props) {
  const { classes } = props;
  const [image, setImage] = useState([]);
  useEffect(() => {
    for (let i in categories) {
      fetch(`https://api.pexels.com/v1/search?query=${i}page=1&per_page=1`, {
        headers: {
          authorization:
            "mfFcHNlUJjFDr3m2EtHO4LWZI0Dc2SYrsNa1H0AVEVIBM9E0s8vvxzAU",
        },
      }).then((res) => {
        res.json().then((data) => {
          setImage([...image, data["photos"][0].url]);
        });
      });
    }
  }, []);

  console.log(image);
  return (
    <div className={classes.menuDiv}>
      {image.map((k) => {
        return <RoundMenu key={v4()} url={k} />;
      })}
    </div>
  );
}

export default withStyles(styles)(Menu);
