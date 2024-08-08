import { Button, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { HelloWave } from "@/components/HelloWave";
import { ExpBar } from "@/components/ExpBar";
//const baseUrl = "http://localhost:3000";

const user = {
  user_firstName: "",
  user_lastName: "",
  user_exp: 3,
  user_reqExp: 0,
  user_age: 0,
  user_createdAt: "2024-05-12T17:35:52.621Z",
  user_deletedAt: null,
  user_id: 2,
  user_level: 1,
  user_updatedAt: "2024-05-12T17:35:52.621Z",
};

export default function Index() {
  const [data, setData] = useState(user);
  const [loading, setLoading] = useState(true);

  let name = data.user_firstName + " " + data.user_lastName;

  console.log("log_ data - ", data);
  const getApiData = async () => {
    axios
      .get("http://localhost:3000/user?id=2")
      .then((res) => {
        console.log("in axios", res.data[0]);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
      getApiData();
    }
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#23448c",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Button title="press me" onPress={() => getApiData()} />
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
        }}
      >
        {ExpBar(data.user_reqExp, data.user_exp, name)}
      </View>
    </View>
  );
}
