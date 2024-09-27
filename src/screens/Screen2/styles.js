import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  flexColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
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
    width: 70,
    height: 70,
    objectFit: "cover",
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
  star: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  border: {
    borderWidth: 2,
    borderColor: "#1511EB",
    padding: 20,
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
