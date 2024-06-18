import { Button, Stack, Text, TextInput } from "@mantine/core";
import { socket } from "@src/utils/socket";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  // const [setIsConnected] = useState(false);
  return (
    <Stack align="center">
      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "red", deg: 90 }}
      >
        Choose username
      </Text>
      <TextInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></TextInput>
      <Button
        onClick={() => {
          socket.disconnect();
          socket.auth = { username };
          socket.connect();

          // setIsConnected(true);

          navigate("/room/general", { state: { chatId: "general" } });
        }}
      >
        Chat!
      </Button>
    </Stack>
  );
}
