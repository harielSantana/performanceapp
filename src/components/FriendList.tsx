import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { Friend } from "./Friend";

interface Props {
  data: {
    id: string;
    name: string;
    likes: number;
    online: string;
  }[];
  follow: () => void;
}

export function FriendList({ data, follow }: Props) {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text>Total de likes: {totalLikes}</Text>
        <Text>Total de usuários: {data.length}</Text>
      </View>
      {data.map((friend) => (
        <Friend key={String(friend.id)} data={friend} follow={follow} />
      ))}
    </View>
  );
}
