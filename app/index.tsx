import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import Task from "../Components/Task";

export default function Index() {
  const [tasks, setTasks] = useState<string>("");
  const [taskitems, settasksitems] = useState<string[]>([]);

  // const [text, setText] = useState<string>(""); // Add text state

  const handleAddEvent = () => {
    settasksitems([...taskitems, tasks]);
    setTasks("");
  };
  const completedTasks = (index:any) => {
    let itemsCopy = taskitems.filter((item, i) => i !== index);
    settasksitems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <Text style={styles.addnew}>9:30 AM - Software Engineering Test</Text>
        {/* <Text style={styles.addnew}>1:30 AM - Web Programming Test</Text> */}

        {taskitems.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => completedTasks(index)} key={index}>
              <Task text={item}></Task>
            </TouchableOpacity>
          );
        })}
      </View>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          placeholder="Enter the Task"
          style={styles.texting}
          value={tasks}
          onChangeText={(text) => setTasks(text)}
        />
        <TouchableOpacity>
          <View>
            <Text
              style={styles.button}
              onPress={() => {
                handleAddEvent();
              }}
            >
              Add
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    color: "black",
  },
  addnew: {
    marginVertical: 20,
    backgroundColor: "black",
    // paddingBottom:40,
    borderRadius: 10,
    color: "white",
    // textAlign:'center',
    padding: 25,
    // fontSize:20,
    // padding:100,
  },
  tasksWrapper: {
    // backgroundColor: "skyblue",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 64,
    fontWeight: "bold",
  },
  keyboard: {
    // padding:40,
    padding: 10,
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    alignContent: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  texting: {
    borderRadius: 10,
    backgroundColor: "white",
    textAlign: "center",
    // paddingHorizontal:125,

    width: 325,
    // fontSize: 23,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    color: "white",
    backgroundColor: "hotpink",
  },
});
