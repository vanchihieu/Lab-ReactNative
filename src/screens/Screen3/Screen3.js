import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { styles } from "./styles";
import TextComponent from "../../components/Text";
import Button from "../../components/Button";

const Screen3 = () => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 141800;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN").format(amount) + " đ";
  };

  const calculateTotal = () => {
    return formatCurrency(quantity * unitPrice);
  };

  const increaseQuantity = () => {
    setQuantity((pre) => pre + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((pre) => pre - 1);
    }
  };
  return (
    <View>
      <View style={[styles.container]}>
        <View style={[styles.flexRow]}>
          <View>
            <Image
              source={require("../../../assets/book.png")}
              style={globalStyles.image}
            />
          </View>
          <View style={[styles.flexColumn]}>
            <TextComponent
              text={"Nguyên hàm tích phân và ứng dụng"}
              size={14}
            />
            <TextComponent text={"Cung cấp bởi Tiki Trading"} size={16} />
            <TextComponent
              text={"141.800 đ"}
              size={18}
              color={"rgba(238, 13, 13, 1)"}
            />
            <TextComponent
              text={"141.800 đ"}
              size={16}
              color={"rgba(128, 128, 128, 1)"}
              styles={{ textDecorationLine: "line-through" }}
            />

            <View style={[globalStyles.row, {}]}>
              <View style={styles.btnQty}>
                <TouchableOpacity style={styles.btn} onPress={decreaseQuantity}>
                  <TextComponent text={"-"} size={16} />
                </TouchableOpacity>
                <TextComponent text={quantity} size={16} />
                <TouchableOpacity style={styles.btn} onPress={increaseQuantity}>
                  <TextComponent text={"+"} size={16} />
                </TouchableOpacity>
              </View>
              <TextComponent
                text={"Mua sau"}
                size={16}
                styles={{ marginLeft: 100 }}
                color={"rgba(19, 79, 236, 1)"}
              />
            </View>
          </View>
        </View>

        <View style={[styles.flexRow, styles.padding]}>
          <TextComponent text={"Mã giảm giá đã lưu"} size={15} />
          <TextComponent
            text={"Xem tại đây"}
            size={15}
            color={"rgba(19, 79, 236, 1)"}
          />
        </View>

        <View style={[globalStyles.row]}>
          <View style={[styles.flexRow, styles.discount]}>
            <View
              style={{
                backgroundColor: "rgba(242, 221, 27, 1)",
                width: 36,
                height: 20,
              }}
            ></View>
            <TextComponent text={"Mã giảm giá"} />
          </View>
          <Button
            text={"Áp dụng"}
            color={"rgba(10, 94, 183, 1)"}
            textColor={"rgba(255, 255, 255, 1)"}
            textSize={15}
            styles={{ width: 110, height: 50 }}
          />
        </View>
      </View>

      <View style={[styles.backGroundColor, { height: 20, marginTop: 5 }]} />

      <View
        style={[styles.container, styles.flexRow, { alignItems: "center" }]}
      >
        <TextComponent
          text={"Bạn có phiếu quà tặng Tiki/Got it/ Urbox?"}
          size={15}
        />
        <TextComponent text={"Nhập tại đây?"} size={14} color={"#134FEC"} />
      </View>

      <View style={[styles.backGroundColor, { height: 20, marginTop: 5 }]} />

      <View style={[globalStyles.row, { padding: 15 }]}>
        <TextComponent text={"Tạm tính"} size={20} />
        <TextComponent text={calculateTotal()} size={18} color={"#EE0D0D"} />
      </View>

      <View style={[styles.backGroundColor, { height: 90, marginTop: 5 }]} />

      <View>
        <View style={[globalStyles.row, { padding: 15 }]}>
          <TextComponent text={"Tạm tính"} size={20} />
          <TextComponent text={calculateTotal()} size={20} color={"#EE0D0D"} />
        </View>
        <Button
          text={"TIẾN HÀNH ĐẶT HÀNG"}
          color={"#E53935"}
          textColor={"#FFFFFF"}
          textSize={18}
        />
      </View>
    </View>
  );
};

export default Screen3;
