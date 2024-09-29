import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    flex: 3,
    width: "auto",
    objectFit: "cover",
    borderRadius: 10,
  },
  content: { flex: 2 },
  flexRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },
  imgStart: {
    width: 25,
    height: 25,
  },
  marginTop: {
    marginTop: 10,
  },
  textDecorationLine: {
    textDecorationLine: "line-through",
  },
  helpBtn: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  helpIcon: {
    width: 20,
    height: 20,
  },
  rightcon: {
    width: 10,
    height: 10,
  },
  pickColorBtn: {},
  boxShadow: {
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  pickColorBtn: {
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.46)",
    padding: 6
  },
  btnBuy:{
    borderRadius: 14,
    paddingVertical: 10,
    marginTop: 20
  }
});
