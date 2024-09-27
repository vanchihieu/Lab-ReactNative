import React, { useState } from "react";
import { Alert, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import TextComponent from "../../components/Text";
import Input from "../../components/Input";
import Checkbox from "./Checkbox";
import Button from "../../components/Button";

const Screen4 = () => {
  const [passwordLength, setPasswordLength] = useState("8");
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const handleChangeValue = (text) => {
    setPasswordLength(text);
  };

  const generatePassword = () => {
    let characters = "";
    if (includeLowerCase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpperCase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (characters.length === 0) {
      Alert.alert("Error", "Please select at least one character type.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < parseInt(passwordLength); i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <LinearGradient style={styles.container} colors={["#3b3b98", "#c4c4c4"]}>
      <View style={[styles.content]}>
        <View style={{ alignItems: "center" }}>
          <TextComponent
            text={"PASSWORD GENERATOR "}
            size={26}
            color={"#FFF"}
            styles={{ width: "50%" }}
          />
        </View>

        <Input
          styleText={{
            backgroundColor: "#151537",
            width: "100%",
            paddingHorizontal: 15,
            paddingVertical: 26,
            color: "#fff",
            fontSize: 18,
          }}
          styles={{ marginTop: 20 }}
          value={password}
        />

        <View style={{ width: "100%", marginTop: 40 }}>
          <View style={[styles.row, { marginBottom: 20 }]}>
            <View>
              <TextComponent
                text={"Password length"}
                size={20}
                color={"#FFFFFF"}
              />
            </View>
            <View>
              <Input
                styleText={{
                  backgroundColor: "#FFF",
                  width: 150,
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  color: "red",
                  fontSize: 18,
                }}
                styles={{ marginLeft: 20 }}
                value={passwordLength}
                onChange={(val) => handleChangeValue(val)}
                placeholder={"Name"}

                // onChange={handlePasswordChange}
              />
            </View>
          </View>

          <Checkbox>Include lower case letters</Checkbox>
          <Checkbox>Include upcase letters</Checkbox>
          <Checkbox>Include number</Checkbox>
          <Checkbox>Include special symbol</Checkbox>
        </View>

        <Button
          text={"GENERATE PASSWORD "}
          color={"#3B3B98"}
          textColor={"#FFFFFF"}
          textSize={18}
          styles={{ marginTop: 15 }}
        />
      </View>
    </LinearGradient>
  );
};

export default Screen4;
