import React, { useCallback, useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FriendList } from "../components/FriendList";

interface Data {
  id: string;
  name: string;
  likes: number;
}

export function Home() {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://192.168.1.190:3333/friends?q=${name}`);
    const data = await response.json();

    const formattedDate = data.map((item: Data) => {
      return {
        id: item.id,
        name: item.name,
        likes: item.likes,
        online: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
    });

    setFriends(formattedDate);
  }

  const handleFollow = useCallback(() => {
    console.log("follow/unfollow");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>
      <TextInput
        placeholder="Nome do cliente"
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Buscar" onPress={handleSearch} />

      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        <FriendList data={friends} follow={handleFollow} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  list: {
    marginTop: 20,
  },
});
