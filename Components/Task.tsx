// Task.tsx
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// Define the props interface
interface TaskProps {
  text: string; // Define the type for the text prop
}

// Create the Task component
const Task: React.FC<TaskProps> = ({ text }) => {
  return (
    <View style={styles.items}>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.texting}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

// Define styles for the Task component
const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    padding:15,
    backgroundColor:'white',
    marginVertical:10,
    borderRadius:10,
    
  },
  texting: {
    marginTop:2
  },
  itemleft: {
    flexDirection:"row",
    alignContent:"center",
    flexWrap:"wrap"
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "lightgreen",
    borderRadius: 10,
    marginRight:15
  },
  circular: {
    width: 20,
    height:20,
    borderRadius:10,
    borderWidth:4,
    borderColor:"hotpink"
  },
});

export default Task;
