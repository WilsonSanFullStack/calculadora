import { evaluate } from "mathjs";
import * as React from "react";
import { useState } from "react";
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
  ".",
  "/",
  "%",
];
export default function HomeScreen() {
  const [expresion, setExpresion] = useState<string>("");
  const [resultado, setResultado] = useState<string | number>("0");

  const actualizarExpresion = (valor: string) => {
    const nuevaExpresion = expresion + valor;
    setExpresion(nuevaExpresion);
    calcularResultado(nuevaExpresion);
  };

  const calcularResultado = (expr: string) => {
    try {
      if (/[\+\-\*\/%]$/.test(expr)) return;

      if (!expr) {
        setResultado("0");
        return;
      }
      // Evaluar la expresión matemática
      const res = evaluate(expr);
      setResultado(res);
    } catch (error) {
      setResultado(expr || "0");
    }
  };

  const borrar = () => {
    setExpresion("");
    setResultado("0");
  };
  const corregir = () => {
    if (expresion.length > 0) {
      const nuevaExpresion = expresion.slice(0, -1);
      setExpresion(nuevaExpresion);
      calcularResultado(nuevaExpresion);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>Expresion:</Text>
        <Text style={styles.text}>{expresion || "0"}</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>Resultado:</Text>
        <Text style={styles.text}>{resultado || "0"}</Text>
      </View>

      <View style={styles.teclas}>
        {teclas.map((tecla) => {
          return (
            <Pressable
              style={({ pressed }) => [
                styles.tecla,
                pressed && styles.bg,
              ]}
              key={tecla}
              onPress={() => actualizarExpresion(tecla)}
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
                pressed && styles.bg,
              ]}
          onPress={borrar}
        >
          <Text style={styles.text}>Eliminar</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [
                styles.tecla,
                pressed && styles.bg,
              ]} onPress={corregir}>
          <Text style={styles.text}>Corregir</Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.95)",
  },
  container2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "60%",
    marginBottom: 20,
    padding: 10,
    borderColor: "rgb(150, 150, 250)",
    borderWidth: 1,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  text: { fontSize: 16, color: "white" },
  teclas: {
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
  bg: {
    backgroundColor: "rgb(150, 150, 250)",
  },
});
