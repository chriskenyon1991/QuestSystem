import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  DimensionValue,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const expBarWidth = "35%";

export function ExpBar(requriedExp: number, exp: number, name: string) {
  const expPercent: DimensionValue = `${(exp / requriedExp) * 100}%`;
  const styles = StyleSheet.create({
    sectionContainer: {
      width: screenWidth,
      height: 50,
      backgroundColor: "#23448c",
      flexDirection: "column",
      // alignItems: "flex-end",
    },
    levelContainer: {},
    text: {
      fontSize: 28,
      lineHeight: 32,
      marginTop: -6,
    },
    bar: {
      width: expPercent,
      height: 5,
      backgroundColor: "#B7E500",
      alignSelf: "center",
      borderRadius: 25,
      opacity: 1,
    },
    barContainer: {
      flexDirection: "row",
      borderWidth: 3,
      borderColor: "rgba(0, 0, 0,0.5)",
      width: expBarWidth,
      backgroundColor: "rgba(0, 0, 0,0.5)",
      opacity: 0.75,
      height: 10,
      marginLeft: 0,
      borderRadius: 25,
    },
    expText: {
      fontSize: 9,
      position: "absolute",
      zIndex: 1,
      fontWeight: "bold",
    },
    levelText: {
      fontSize: 25,
      color: "white",
      //  fontWeight: "bold",
    },
    nameText: {
      fontSize: 16,
      color: "white",
      fontFamily: "sans-serif",
      fontWeight: 200,
    },
  });
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.levelContainer}>
        <Text style={styles.levelText}>12</Text>
      </View>
      <View style={styles.barContainer}>
        <View style={styles.bar}></View>
      </View>
      <View>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </View>
  );
}

const bar: DimensionValue = "0%";
