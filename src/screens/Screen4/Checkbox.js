import React, { useState } from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import TextComponent from "../../components/Text";

const Checkbox = ({ children, onChange = () => {} }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((checked) => !checked);
    onChange();
  };

  return (
    <View style={[styles.row, { marginBottom: 25 }]}>
      <TextComponent text={children} color={"#fff"} size={18} />
      <TouchableWithoutFeedback onPress={handleChange}>
        <View style={styles.checkbox}>
          {checked && (
            <Image
              style={styles.checkIcon}
              source={require("../../../assets/checkIcon.png")}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Checkbox;
