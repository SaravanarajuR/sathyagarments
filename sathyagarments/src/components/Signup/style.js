const styles = {
  parent: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#808080",
    borderRadius: "10px",
    gap: "20px",
    width: "80%",
    padding: "20px",
    height: "60%",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    "@media(min-width:900px)": {
      height: "60%",
      width: "60%",
    },
  },
  form: {
    width: "100%",
    height: "80%",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
  },
  icon: {
    color: "white",
    fontSize: "40px",
    height: "70px",
    width: "100px",
    filter: "drop-shadow(7px 5px 3px rgba(0,0,0,0.7))",
  },
  input: {
    width: "60%",
    height: "13%",
    borderRadius: "5px",
    border: "none",
    padding: "0 10px",
    fontWeight: "700",
    color: "black",
    backgroundColor: "rgba(255,255,255,0.7)",
    "&:focus": {
      border: "2px solid white",
      outline: "none",
      backgroundColor: "rgba(255,255,255,0.2)",
    },
    "&::placeholder": {
      color: "rgba(0,0,0,0.6)",
    },
  },
  headText: {
    color: "black",
    fontWeight: "900",
    fontSize: "35px",
    fontFamily: "'Libre Baskerville', serif",
    userSelect: "none",
    margin: 0,
  },
  btn: {
    width: "50%",
    height: "auto",
    backgroundColor: "black",
    padding: "10px 0",
    border: "none",
    fontSize: "16px",
    fontWeight: "800",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.5)",
  },
  text: {
    color: "black",
    alignSelf: "flex-end",
    marginRight: "18%",
    userSelect: "none",
    cursor: "pointer",
    fontWeight: "700",
  },
  name: {
    color: "#808080",
    fontSize: "25px",
    fontWeight: "800",
    position: "absolute",
    top: "15px",
    left: "20px",
    margin: 0,
  },
  span: {
    color: "black",
  },
};

export default styles;
