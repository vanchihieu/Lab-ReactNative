import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";

const AddTaskScreen = ({ navigation, route }) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      route.params.addNewTask(task);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 48,
        }}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
          <View
            style={{
              backgroundColor: "#DACFF3",
              borderWidth: 1,
              borderRadius: 100,
              textAlign: "center",
            }}
          >
            <Image
              source={require("../../../assets/user.png")}
              width={10}
              height={10}
            />
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}
            >
              Hi Twinkle
            </Text>
            <Text style={{ fontSize: 16 }}>Here agrate day a head</Text>
          </View>
        </View>
        <Ionicons name="arrow-back" size={24} color="black" />
      </View>
      <Text style={styles.title}>Add Your Job</Text>
      <View style={{ position: "relative" }}>
        <Fontisto
          name="calendar"
          size={20}
          color="green"
          style={{ position: "absolute", top: 12, left: 10 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          value={task}
          onChangeText={setTask}
        />
      </View>
      <TouchableOpacity
        onPress={addTask}
        style={{
          width: "50%",
          height: 50,
          backgroundColor: "#00BDD6",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 80,
          marginTop: 22,
        }}
      >
        <Text style={{ color: "white" }}>Finish</Text>
      </TouchableOpacity>

      <Image
        source={require("../../../assets/note.png")}
        style={{ marginLeft: 60, marginTop: 40 }}
        width={15}
        height={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 40,
    borderWidth: 1
  },
});

export default AddTaskScreen;
