import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  data: {
    id: string;
    name: string;
    likes: number;
    online: string;
  };
  follow: () => void;
}

function FriendComponent({ data, follow }: Props) {
  return (
    <View
      style={{
        marginBottom: 10,
        backgroundColor: "#D8E0E4",
        borderRadius: 5,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text>{data.name}</Text>
        <Text>Likes: {data.likes}</Text>
      </View>

      <Text>Online em: {data.online}</Text>
      <TouchableOpacity onPress={follow}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>
    </View>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
