import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    marginTop: 20,
    width: 112,
    height: 107,
  },
  fbBtn: {
    width: 74,
    height: 74,
    backgroundColor: "#3A579C",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  wifiBtn: {
    backgroundColor: "rgba(244, 170, 71, 1)",
  },
  font: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  textGroup6: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  rowIcon: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
