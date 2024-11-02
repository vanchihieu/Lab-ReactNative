import React from 'react';
import { RecoilRoot } from 'recoil';
import Screen1 from './src/screens/Screen1';

const App = () => {
  return (
    <RecoilRoot>
      <Screen1 />
    </RecoilRoot>
  );
};

export default App;

Bước 3: Tạo các atoms và selectors
Tạo file taskState.js trong thư mục state

import { atom, selector } from 'recoil';

// Atom để lưu trữ danh sách nhiệm vụ
export const tasksState = atom({
  key: 'tasksState',
  default: [],
});

// Atom để lưu trữ trạng thái tải
export const loadingState = atom({
  key: 'loadingState',
  default: false,
});

// Atom để lưu trữ lỗi
export const errorState = atom({
  key: 'errorState',
  default: null,
});

// Selector để fetch nhiệm vụ từ API
export const fetchTasksSelector = selector({
  key: 'fetchTasksSelector',
  get: async ({ get }) => {
    get(loadingState); // Để theo dõi trạng thái tải
    try {
      const response = await fetch('https://6459b0cb8badff578e129284.mockapi.io/tasks');
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
});

// Selector để thêm nhiệm vụ
export const addTaskSelector = selector({
  key: 'addTaskSelector',
  set: async ({ get, set }, newTask) => {
    try {
      const response = await fetch('https://6459b0cb8badff578e129284.mockapi.io/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      set(tasksState, (oldTasks) => [...oldTasks, data]);
    } catch (error) {
      set(errorState, error.message);
    }
  },
});

// Selector để cập nhật nhiệm vụ
export const updateTaskSelector = selector({
  key: 'updateTaskSelector',
  set: async ({ get, set }, updatedTask) => {
    try {
      const response = await fetch(`https://6459b0cb8badff578e129284.mockapi.io/tasks/${updatedTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await response.json();
      set(tasksState, (oldTasks) =>
        oldTasks.map((task) => (task.id === data.id ? data : task))
      );
    } catch (error) {
      set(errorState, error.message);
    }
  },
});

// Selector để xóa nhiệm vụ
export const deleteTaskSelector = selector({
  key: 'deleteTaskSelector',
  set: async ({ get, set }, taskId) => {
    try {
      await fetch(`https://6459b0cb8badff578e129284.mockapi.io/tasks/${taskId}`, {
        method: 'DELETE',
      });
      set(tasksState, (oldTasks) => oldTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      set(errorState, error.message);
    }
  },
});

Bước 4: Cập nhật các thành phần React để sử dụng Recoil

Cập nhật Screen1.js

import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, TextInput, View, Button } from "react-native";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { tasksState, loadingState, errorState, fetchTasksSelector, addTaskSelector, updateTaskSelector, deleteTaskSelector } from '../state/taskState';
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Screen1 = ({ navigation }) => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const loading = useRecoilValue(loadingState);
  const error = useRecoilValue(errorState);
  const fetchTasks = useSetRecoilState(fetchTasksSelector);
  const addTask = useSetRecoilState(addTaskSelector);
  const updateTask = useSetRecoilState(updateTaskSelector);
  const deleteTask = useSetRecoilState(deleteTaskSelector);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const filteredTasks = Array.isArray(tasks) ? tasks.filter((task) =>
    task.title && task.title.toLowerCase().includes(search.toLowerCase())
  ) : [];

  const addNewTask = (newTaskTitle) => {
    const newTask = {
      id: (tasks.length + 1).toString(),
      title: newTaskTitle,
    };
    addTask(newTask);
  };

  const editTask = (task) => {
    navigation.navigate("EditTask", { task, updateTask: handleUpdateTask });
  };

  const handleUpdateTask = (updatedTask) => {
    updateTask(updatedTask);
  };

  const handleDeleteTask = (taskId) => {
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
            deleteTask(taskId);
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => {
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
            onPress={() => handleDeleteTask(item.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={(text) => setSearch(text)}
        style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderColor: '#ccc', borderRadius: 4 }}
      />
      <Button title="Add Task" onPress={() => navigation.navigate("AddTask", { addNewTask })} />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Screen1;