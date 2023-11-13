const style = {
  parent: {
    width: "100%",
    height: "100%",
  },
  home: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: () => {
      return 0.35 * window.innerHeight;
    },
    justifyContent: "space-evenly",
    display: "flex",
    fontSize: "85%",
    padding: "20px 0",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
};

export default style;
