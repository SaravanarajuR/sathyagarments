const style = {
  home: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  carousel: {
    width: "95%",
    height: "30%",
    overflow: "hidden",
    display: "flex",
    userSelect: "none",
    flexWrap: 0,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    borderRadius: "0 0 10px 10px",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    margin: "10px 10px",
    padding: "20px 0",
  },
  carDiv: {
    width: "85%",
    borderRadius: "20px",
    maxWidth: "800px",
    height: "300px",
    "@media(max-width=600px)": {},
  },
  carouselBtn: {
    border: "none",
    height: "40px",
    width: "40px",
    fontSize: "1.6rem",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
  },
  carouselImg: {
    width: "100%",
  },
  active: {
    display: "content",
  },
  hidden: {
    display: "none",
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
