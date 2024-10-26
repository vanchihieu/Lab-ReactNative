import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const ScreenCau1 = () => {
  const foods = [
    {
      name: "Strawberry Bliss Pancakes",
      price: 2.8,
      like: true,
      image: require("./assets/download (7).png"),
    },
    {
      name: "Classic Grilled Ribeye",
      price: 10.9,
      like: false,
      image: require("./assets/download (8).png"),
    },
    {
      name: "Garlic Butter Shrimp",
      price: 8.5,
      like: true,
      image: require("./assets/download (8).png"),
    },
    {
      name: "BBQ Chicken Pizza",
      price: 5.0,
      like: false,
      image: require("./assets/download (7).png"),
    },
    {
      name: "Spaghetti Carbonara",
      price: 6.2,
      like: true,
      image: require("./assets/download (7).png"),
    },
    {
      name: "Chicken Caesar Salad",
      price: 4.3,
      like: false,
      image: require("./assets/download (7).png"),
    },
  ];

  const categories = [
    { type: "Food", image: require("./assets/download (3).png") },
    { type: "Beverage", image: require("./assets/download (4).png") },
    { type: "Offers", image: require("./assets/download (5).png") },
    { type: "Others", image: require("./assets/download (6).png") },
    { type: "Food", image: require("./assets/download (3).png") },
    { type: "Beverage", image: require("./assets/download (4).png") },
  ];

  const FoodItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "#FFF",
          borderRadius: 10,
          // alignItems: "center",
        }}
      >
        <View style={{ width: "50%", marginRight: 10 }}>
          <Image
            source={item.image}
            style={{
              width: 200,
              height: 120,
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
        </View>
        <AntDesign name="like2" size={24} color="red" />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              width: "50%",
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "green",
            }}
          >
            ${item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ padding: 20, backgroundColor: "#F1F1F1" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#D1EBC3",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/download.png")}
            style={{ objectFit: "contain", width: "20px", height: "20px" }}
          />
        </View>
        <View>
          <Text>Location</Text>
          <Text>123 Anywhere St, Any City</Text>
        </View>
      </View>

      <View style={{ display: "flex", alignItems: "center" }}>
        <Image
          source={require("./assets/Capture.png")}
          style={{ width: "80%", height: 200, borderRadius: 20 }}
        />
        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            20% Promo
          </Text>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            Cashback
          </Text>
        </View>
      </View>
      <View>
        <TextInput
          placeholder="Think your favourite food"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "black",
          }}
        />
        <Image
          source={require("./assets/download (2).png")}
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            right: 20,
            top: 10,
          }}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {categories.slice(0, 4).map((category, index) => (
          <View
            key={index}
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#D1EBC3",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            <Image source={category.image} style={{ width: 30, height: 30 }} />
            <Text>{category.type}</Text>
          </View>
        ))}
      </View>

      <View style={{ height: "auto", marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
          Premium Food
        </Text>

        <FlatList
          data={foods.slice(0, 2)}
          renderItem={({ item }) => <FoodItem item={item} />}
          numColumns={2}
        />

        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
          Premium Food
        </Text>

        <FlatList
          data={foods.slice(2, 4)}
          renderItem={({ item }) => <FoodItem item={item} />}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ScreenCau1;
