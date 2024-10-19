import React, { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Screen1 = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const editTask = (task) => {
    navigation.navigate("EditTask", { task, updateTask });
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            setTasks(tasks.filter((task) => task.id !== taskId));
          },
        },
      ]
    );
  };

  const addNewTask = (newTaskTitle) => {
    const newTask = {
      id: (tasks.length + 1).toString(), 
      title: newTaskTitle,
    };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://6459b0cb8badff578e129284.mockapi.io/user"
        );
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const renderItem = (item, index) => {
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
          <Text style={{ fontSize: 16 }}>{item.title}</Text>
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
            onPress={() => deleteTask(item.id)}
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
          onChangeText={setSearch}
        />
      </View>

      <View style={{ marginTop: 12 }}>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
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
