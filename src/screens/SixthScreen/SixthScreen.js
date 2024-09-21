import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import TextComponent from "../../components/Text";
import Input from "../../components/Input";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import Button from "../../components/Button";

const SixthScreen = () => {
  const [current, setCurrent] = useState("test");

  return (
    <View style={styles.container}>
      <TextComponent text={"REGISTER"} size={25} />

      <View>
        <Input
          placeholder={"Name"}
          styleText={{ fontSize: 16 }}
          styles={{ marginTop: 20 }}
        />
        <Input
          placeholder={"Phone"}
          styleText={{ fontSize: 16 }}
          styles={styles.marginTop}
        />
        <Input
          placeholder={"Email"}
          styleText={{ fontSize: 16 }}
          styles={styles.marginTop}
        />
        <Input
          placeholder={"Password"}
          styleText={{ fontSize: 16 }}
          styles={styles.marginTop}
        />
        <Input
          placeholder={"Birthday"}
          styleText={{ fontSize: 16 }}
          styles={styles.marginTop}
        />
      </View>

      <View
        style={[styles.marginTop, { paddingHorizontal: 20, marginTop: 20 }]}
      >
        <RadioButtonGroup
          containerStyle={{ marginBottom: 10, flexDirection: "row" }}
          selected={current}
          onSelected={(value) => setCurrent(value)}
          radioBackground="green"
        >
          <RadioButtonItem
            value="test2"
            label="Male"
            style={{
              marginHorizontal: 5,
              color: "#000",
              borderColor: "#000",
            }}
          />
          <RadioButtonItem
            value="test"
            label={<Text>Female</Text>}
            style={{
              marginLeft: 20,
              marginRight: 10,
              color: "#000",
              borderColor: "#000",
            }}
          />
        </RadioButtonGroup>
      </View>

      <Button
        text={"REGISTER"}
        color={"rgba(229, 57, 53, 1)"}
        textColor={"rgba(255, 255, 255, 1)"}
        styles={{ marginTop: 25 }}
        onPress={() => navigation.navigate("SixthScreen")}
      />

      <TextComponent
        text={"When you agree to terms and conditions"}
        styles={[styles.font, { marginTop: 20 }]}
        color={"rgba(0, 0, 0, 1)"}
      />
    </View>
  );
};

export default SixthScreen;
