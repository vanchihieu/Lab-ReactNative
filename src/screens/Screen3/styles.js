import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backGroundColor: {
    backgroundColor: "#c4c4c4",
    width: "100%",
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },
  flexColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
  btnQty: {
    flexDirection: "row",
    gap: 10,
  },
  btn: {
    width: 20,
    height: 20,
    backgroundColor: "#c4c4c4",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  padding: {
    paddingVertical: 20,
  },
  discount: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 12,
    width: 250,
  },
});
