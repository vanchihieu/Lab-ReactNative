import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderColor: "black",
    width: "100%",
    height: 50,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
