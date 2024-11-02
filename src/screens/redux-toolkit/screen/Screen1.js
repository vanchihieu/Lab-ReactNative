import React, { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  fetchTasks,
  updateTask,
} from "../slices/taskSlice";

const Screen1 = ({ navigation }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  console.log("🚀 ~ Screen1 ~ tasks:", tasks);

  const loading = useSelector((state) => state.task.loading);
  const error = useSelector((state) => state.task.error);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = Array.isArray(tasks)
    ? tasks.filter(
        (task) =>
          task.name && task.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const addNewTask = (newTaskTitle) => {
    const newTask = {
      id: (tasks.length + 1).toString(),
      name: newTaskTitle,
    };
    dispatch(addTask(newTask));
  };

  const editTask = (task) => {
    navigation.navigate("EditTask", { task, updateTask: handleUpdateTask });
  };

  const handleUpdateTask = (updatedTask) => {
    dispatch(updateTask(updatedTask));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));

    // Alert.alert(
    //   "Confirm Delete",
    //   "Are you sure you want to delete this task?",
    //   [
    //     {
    //       text: "Cancel",
    //       style: "cancel",
    //     },
    //     {
    //       text: "Delete",
    //       onPress: () => {
    //         dispatch(deleteTask(taskId));
    //       },
    //     },
    //   ]
    // );
  };

  const renderItem = (item) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
          backgroundColor: "#D2D5D8",
          padding: 12,
          borderRadius: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <AntDesign name="checksquareo" size={24} color="green" />
          <Text style={{ fontSize: 16 }}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <AntDesign
            name="edit"
            size={24}
            color="#EA2828"
            onPress={() => editTask(item)}
          />
          <AntDesign
            name="delete"
            size={24}
            color="blue"
            onPress={() => handleDeleteTask(item.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{ padding: 14 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <AntDesign name="back" size={24} color="black" />
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
              source={require("../../../../assets/user.png")}
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
      </View>

      <View
        style={{
          flexDirection: "row",
          borderColor: "black",
          borderWidth: 0.5,
          marginTop: 16,
          marginBottom: 24,
          borderRadius: 2,
          padding: 4,
        }}
      >
        <EvilIcons name="search" size={28} color="black" />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      <View style={{ marginTop: 12 }}>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderItem(item, index)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 170,
          backgroundColor: "#26C3D9",
          width: 60,
          height: 60,
          borderRadius: 50,
          textAlign: "center",
        }}
      >
        <AntDesign
          name="plus"
          size={22}
          color="white"
          onPress={() => navigation.navigate("AddTask", { addNewTask })}
        />
      </View>
    </View>
  );
};

export default Screen1;
