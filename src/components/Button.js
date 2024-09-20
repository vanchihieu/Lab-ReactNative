import React from "react";
import { TouchableOpacity, View } from "react-native";
import TextComponent from "./Text";

const Button = (props) => {
  const {
    icon,
    text,
    textColor,
    color,
    styles,
    onPress,
    disable,
    textStyles,
    textFont,
    weight,
  } = props;
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        disable={disable}
        onPress={onPress}
        style={[
          {
            backgroundColor: color,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            flexDirection: "row",
            width: "100%",
          },
          styles,
        ]}
      >
        {icon}
        <TextComponent
          text={text}
          color={textColor}
          font={textFont}
          styles={textStyles}
          fontWeight={weight}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Button;
