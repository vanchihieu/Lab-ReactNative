import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  flexColumn:{
    flexDirection: "column",
    justifyContent: "space-between"
  },
  marginTop: {
    marginTop: 40,
  },
  font: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
  imageCamera: {
    width: 40,
    height: 30,
  },
  containerUsb: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  star:{
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    
  },
  border: {
    borderWidth: 1,
    borderColor: "#1511EB",
    padding: 15,
    borderRadius: 6,
  },
  borderContent: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 20,
    height: 222,
  },
});
