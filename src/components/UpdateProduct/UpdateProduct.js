import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, updateProductAsync } from "../../slices/productSlice";

const UpdateProduct = ({ route, navigation }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const [name, setName] = useState(item.name);
  const [type, setType] = useState(item.type);
  const [price, setPrice] = useState(item.price.toString());
  const [image, setImage] = useState(item.image);
  const [isWish, setIsWish] = useState(item.isWish);

  const handleUpdateProduct = () => {
    const updatedProduct = {
      id: item.id,
      name,
      type,
      price: parseFloat(price),
      image,
      isWish,
    };
    dispatch(updateProductAsync(updatedProduct));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Type</Text>
      <TextInput style={styles.input} value={type} onChangeText={setType} />
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Image URL</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />
      <Button title="Update Product" onPress={handleUpdateProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default UpdateProduct;
