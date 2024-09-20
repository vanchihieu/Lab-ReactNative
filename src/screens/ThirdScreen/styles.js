import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    borderColor: "#C4C4C4",
    width: 48,
    height: 45,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mid: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
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
    width: "100%",
    height: 45,
  },
  inputEmail: {
    backgroundColor: "#C4C4C4",
    width: "85%",
    height: 45,
  },
});
