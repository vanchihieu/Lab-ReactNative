import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(49, 170, 82, 0.19)",
    paddingHorizontal: 15,
    paddingTop: 60,
  },
  marginTop: {
    marginTop: 40,
  },
  font: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Roboto",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 45,
    flex: 1,
  },
  rec1: {
    borderRadius: 1,
    backgroundColor: "#25479B",
    justifyContent: "center",
    alignItems: "center",
  },
  rec2: {
    borderRadius: 2,
    backgroundColor: "#0F8EE0",
    justifyContent: "center",
    alignItems: "center",
  },
  rec3: {
    borderRadius: 1,
    border: "1px solid #25479B",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
