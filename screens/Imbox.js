import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";
import * as ImagePicker from "expo-image-picker";

export default function Seleccionar() {
  const [selectedImage, setSelectedtImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedtImage(result.assets[0].uri);
    } else {
      alert("cancelar");
    }
  };
  return (
    // <View style={styles.container}>
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        container: {
          flex: 1,
          // backgroundColor: "#25292e",
          alignItems: "center",
        },
      }}
    >
      {/* <View > */}
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={{
            uri: "https://media.gq.com.mx/photos/5ef92a5685180fb067834ab7/16:9/w_2560%2Cc_limit/south-park-censura-hbo.jpg",
          }}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Seleccionar Foto"
          theme="primary"
          onPressHandler={pickImageAsync}
        />
        <Button label="Usar foto" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
