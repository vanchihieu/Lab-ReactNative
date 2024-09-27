import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";
import TextComponent from "../../components/Text";
import Button from "../../components/Button";

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerUsb}>
        <Image
          source={require("../../../assets/usb.png")}
          style={styles.image}
        />
        <TextComponent
          text={
            "USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth"
          }
          size={21}
          styles={{ textAlign: "flex-start", numOfLine: 3 }}
        />
      </View>

      <TextComponent
        text={"Cực kỳ hài lòng"}
        styles={styles.marginTop}
        size={20}
      />

      <View style={[styles.star]}>
        {new Array(5).fill(null).map((item, index) => (
          <Image
            key={index}
            style={styles.start}
            source={require("../../../assets/Star.png")}
          />
        ))}
      </View>

      <View style={[styles.border, styles.star]}>
        <Image
          source={require("../../../assets/camera.png")}
          style={styles.imageCamera}
        />
        <TextComponent
          text={"Thêm hình ảnh"}
          size={16}
          styles={{ textAlign: "flex-start" }}
        />
      </View>

      <View style={[styles.borderContent, styles.flexColumn]}>
        <TextComponent
          text={"Hãy chi sẻ những điều mà bạn thích về sản phẩm"}
          color={"#C4C4C4"}
          size={20}
          styles={{ textAlign: "start" }}
        />
        <TextComponent
          text={"https://meet.google.com/nsj-ojwi-xpp"}
          color={"#000000"}
          size={13}
          styles={{ textAlign: "right" }}
        />
      </View>

      <Button
        text={"Gửi"}
        color={"rgba(13, 93, 182, 1)"}
        textColor={"rgba(255, 255, 255, 1)"}
        textSize={20}
        onPress={() => navigation.navigate("SeventhScreen")}
        styles={{
          borderWidth: 1,
          borderColor: "rgba(21, 17, 235, 1)",
          marginTop: 25,
          padding: 15,
        }}
      />
    </View>
  );
};

export default Screen2;
