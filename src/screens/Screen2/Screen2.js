import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const Screen2 = ({ navigation, route }) => {
  const { indexImage, product } = route.params;
  const [colorSelected, setColorSelected] = useState(indexImage);

  const handleSelectedColor = (color) => {
    setColorSelected(color);
  };

  const handleBack = () => {
    navigation.navigate("screen_01", { indexImage: colorSelected });
  };

  return (
    <View>
      <View style={[styles.container, styles.flexRow]}>
        <Image style={styles.helpIcon} source={product.colors} />
      </View>

      <View></View>
    </View>
  );
};

export default Screen2;
