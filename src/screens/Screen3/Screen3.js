import React from "react";
import { Image, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { styles } from "./styles";
import TextComponent from "../../components/Text";
import Button from "../../components/Button";

const Screen3 = () => {
  return (
    <View style={[globalStyles.container, styles.backGroundColor]}>
      <View style={[styles.flexRow]}>
        <View>
          <Image
            source={require("../../../assets/book.png")}
            style={globalStyles.image}
          />
        </View>
        <View>
          <TextComponent text={"Nguyên hàm tích phân và ứng dụng"} size={12} />
          <TextComponent text={"Cung cấp bởi Tiki Trading"} size={12} />
          <TextComponent text={"141.800 đ"} size={12} />
          <TextComponent text={"141.800 đ"} size={12} />
          <View style={globalStyles.row}>
            <View>
              <Button text={"-"} />
              <TextComponent text={"1"} size={12} />
              <Button text={"+"} />
            </View>
            <TextComponent text={"Mua sau"} size={12} />
          </View>
        </View>
      </View>

      <View style>
        <TextComponent text={"Mã giảm giá đã lưu"} size={12} />
        <TextComponent text={"Xem tại đây"} size={12} />
      </View>

      <View style={globalStyles.row}>
        <View>
            <Image/>
            <TextComponent text={'Mã giảm giá'}/>
        </View>
        <Button text={'Áp dụng'}/>
      </View>


    </View>
  );
};

export default Screen3;
