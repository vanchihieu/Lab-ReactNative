import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const EditTaskScreen = ({ route, navigation }) => {
  const { task, updateTask } = route.params;
  const [taskTitle, setTaskTitle] = useState(task.title);

  const saveTask = () => {
    const updatedTask = { ...task, title: taskTitle };
    updateTask(updatedTask); 
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Your Job</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Button title="Save" onPress={saveTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default EditTaskScreen;
