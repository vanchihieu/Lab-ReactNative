import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mid: {
    flex: 1,
    justifyContent: "space-evenly",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  circle: {
    width: 140,
    height: 140,
  },
  textTitle: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  text: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: "50px",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  textButton: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "#E3C000",
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
    width: 119,
    height: "48",
  },
});
