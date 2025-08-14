import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const teclas = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  "0",
  "X",
  "/",
  "%",
];

const [operacion, setOperation] = React.useState<string | null>(null);


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.teclas}>
        {teclas.map((tecla) => {
          return (
            <Pressable
              style={({ pressed }) => [
                styles.tecla,
                pressed && { backgroundColor: "rgb(50, 100, 250)" },
              ]}
              key={tecla}
            >
              <Text style={styles.text}>{tecla}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.teclas2}>
        <Pressable
          style={({ pressed }) => [
            styles.tecla,
            pressed && { backgroundColor: "rgb(50, 100, 250)" },
          ]}
        >
          <Text style={styles.text}>Calcular</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.tecla,
            pressed && { backgroundColor: "rgb(50, 100, 250)",  },
          ]}
        >
          <Text style={styles.text}>Borrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#181b1c",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  text: { fontSize: 16, color: "white" },
  teclas: {
    backgroundColor: "rgb(0, 0, 0)",

    display: "flex",
    aspectRatio: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: "auto",
    minWidth: 300,
    height: "auto",
    minHeight: 300,
  },
  teclas2: {
    backgroundColor: "rgb(0, 0, 0)",
    color: "white",
    display: "flex",
    aspectRatio: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    width: "auto",
    minWidth: 300,
    height: "auto",
    minHeight: 100,
    maxHeight: 100,
    gap: 10,
  },
  tecla: {
    backgroundColor: "rgb(50, 50, 250)",
    color: "rgb(255, 255, 255)",
    borderRadius: 5,
    margin: 5,
    padding: 20,
  },
});
