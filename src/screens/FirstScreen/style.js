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
  
    circle: {
      width: 140,
      height: 140,
    },
    textTitle: {
      color: "#000000",
      fontSize: "25px",
      fontWeight: "bold",
      marginTop: "70px",
      fontFamily: "Roboto",
    },
    text: {
      color: "#000000",
      fontSize: "15px",
      fontWeight: "600",
      marginTop: "50px",
      fontFamily: "Roboto",
    },
    textButton: {
      color: "#000000",
      fontSize: "22px",
      fontWeight: "700",
      fontFamily: "Roboto",
      textAlign: "center",
      textTransform: "uppercase",

    },
    button: {
      backgroundColor: "#E3C000",
      padding: "10px",
      borderRadius: "10px",
      marginTop: "40px",
      width: "119px",
      height: "48px",
    },
  });
  