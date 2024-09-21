import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const Input = (props) => {
  const {
    value,
    onChange,
    affix,
    suffix,
    placeholder,
    isPassword,
    numberOfLine,
    styles,
    styleText,
  } = props;

  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <View style={[globalStyles.inputContainer, styles]}>
      {affix ?? affix}
      <TextInput
        style={[
          globalStyles.text,
          {
            paddingHorizontal: affix || suffix ? 14 : 12,
          },
          styleText,
        ]}
        value={value}
        numberOfLines={numberOfLine}
        placeholder={placeholder ?? ""}
        onChangeText={(val) => onChange(val)}
        secureTextEntry={isShowPass}
        placeholderTextColor={"#747688"}
        autoCapitalize="none"
      />
      {/* {suffix ?? suffix} */}
      <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange("")
        }
      >
        {isPassword && <Image source={require("../../assets/eye.png")} />}
      </TouchableOpacity>
    </View>
  );
};

export default Input;
