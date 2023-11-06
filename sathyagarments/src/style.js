const a = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  signup: {
    backgroundColor: "green",
  },
  input: {
    padding: "10px 10px",
    borderRadius: "9px",
    border: "none",
    margin: "5px",
    display: "block",
  },
  err: {
    backgroundColor: "rgba(220,0,0,0.5)",
    color: "white",
    "&:focus": {
      backgroundColor: "rgba(220,0,0,0.5)",
      border: "none",
      outline: "none",
    },
    "&::placeholder": {
      color: "white",
    },
  },
  gud: {
    backgroundColor: "white",
    color: "black",
    "&:focus": {
      backgroundColor: "white",
      border: "none",
      outline: "none",
    },
    "&::placeholder": {
      color: "black",
    },
  },
};

export default a;
