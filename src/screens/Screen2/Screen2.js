import React, { useState } from "react";
import {
  Pressable,
  View,
  Image,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Screen2 = ({ navigation }) => {
  const [datas, setDatas] = useState([
    {
      name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
      star: 4,
      numOfReview: 15,
      price: 139230,
      salePercent: 0.39,
      img: require("../../../assets/giacchuyen 1.png"),
    },
    {
      name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
      star: 4,
      numOfReview: 15,
      price: 139230,
      salePercent: 0.39,
      img: require("../../../assets/daynguon 1.png"),
    },
    {
      name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
      star: 4,
      numOfReview: 15,
      price: 139230,
      salePercent: 0.39,
      img: require("../../../assets/dauchuyendoipsps2 1.png"),
    },
    {
      name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
      star: 4,
      numOfReview: 15,
      price: 139230,
      salePercent: 0.39,
      img: require("../../../assets/dauchuyendoi 1.png"),
    },
    {
      name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
      star: 4,
      numOfReview: 15,
      price: 139230,
      salePercent: 0.39,
      img: require("../../../assets/carbusbtops2 1.png"),
    },
    {
      name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
      star: 4,
      numOfReview: 15,
      price: 139230,
      salePercent: 0.39,
      img: require("../../../assets/daucam 1.png"),
    },
  ]);
  
  const renderProductItem = (item, index) => {
    return (
      <View style={{ width: "50%", marginBottom: 20 }}>
        <Image
          source={item?.img}
          resizeMode="contain"
          style={{ width: "100%", height: 100 }}
        />
        <Text
          style={{ paddingHorizontal: 15, marginTop: 8, fontWeight: "600" }}
          numberOfLines={2}
        >
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 18,
            marginVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {Array(5)
              .fill(0)
              .map((_, id) => {
                if (id + 1 <= item.star) {
                  return <AntDesign name="star" size={24} color="yellow" />;
                } else {
                  return <AntDesign name="staro" size={24} color="black" />;
                }
              })}
          </View>
          <Text>({item.numOfReview})</Text>
        </View>
        <View style={{ flexDirection: "row", marginRight: 10 }}>
          <Text style={{ fontWeight: "700", paddingHorizontal: 20 }}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "vnd",
            }).format(item.price * (1 - item.salePercent))}
          </Text>
          <Text style={{ color: "#666" }}>
            {item?.salePercent ? -1 * (item.salePercent * 100) : 0}%
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      <View>
        <View
          style={{
            backgroundColor: "#1BA9FF",
            paddingHorizontal: 15,
            paddingVertical: 14,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={24} color="black" />
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              paddingHorizontal: 10,
              paddingVertical: 4,
              width: "55%",
            }}
          >
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              placeholder="Dây cáp usb"
              placeholderTextColor={"#333"}
              style={{ marginLeft: 10, fontSize: 16 }}
            />
          </View>
          <Pressable style={{ position: "relative" }}>
            <AntDesign name="shoppingcart" size={24} color="black" />

            <Text
              style={{
                position: "absolute",
                padding: 5,
                backgroundColor: "#E93838",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 100,
                top: -12,
                right: -12,
                textAlign: "center",
                color: "#fff",
                fontSize: 12,
              }}
            >
              4
            </Text>
          </Pressable>
          <Pressable>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      <FlatList
        data={datas}
        style={{ paddingVertical: 20 }}
        keyExtractor={(item, index) => index}
        numColumns={2}
        renderItem={({ item, index }) => renderProductItem(item, index)}
      />
    </View>
  );
};

export default Screen2;
