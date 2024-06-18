import { ActionIcon, Flex, Group, TextInput, Title } from "@mantine/core";
import { chatsContext } from "@src/contexts/chats.context";
import { socket } from "@src/utils/socket";
import { useContext, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { useLocation, useParams } from "react-router-dom";
import Message from "./components/Message/Message";

export default function Chat() {
  const { chatType, chatName } = useParams();
  const location = useLocation();
  const chatId = location.state.chatId;
  // console.log(location.state);

  // const { currentChatId: chatId } = location.state;
  // console.log(location);

  // console.log(currentChatId);

  const [message, setMessage] = useState("");
  const { chats, setChats } = useContext(chatsContext);

  function handleMessages() {
    const tmp_chats = { ...chats };

    if (tmp_chats[chatId] == undefined) {
      tmp_chats[chatId] = {
        name: chatName,
        isRoom: chatType == "room",
        messages: [],
        id: chatId,
        hasNewMessages: false,
      };
    }
    tmp_chats[chatId].messages.unshift({
      text: message,
      id: socket.id,
      username: socket.name,
    });
    setChats(tmp_chats);

    socket.emit("message", {
      isRoom: chats[chatId].isRoom,
      from: socket.id,
      to: chatId,
      text: message,
    });
    setMessage("");
  }

  return (
    <Flex
      p={"md"}
      gap={"sm"}
      direction={"column"}
      // justify={"space-between"}
      h={
        "calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px))"
      }
    >
      <Title order={2} c={"red"}>
        {chatName?.substring(0, 20)}
      </Title>

      {/* <ScrollArea> */}
      <Flex
        direction={"column-reverse"}
        flex={1}
        style={{ overflowY: "scroll" }}
      >
        {/* {messages[roomId]?.messages.map((message, index) => {
          // console.log(message);
         
        })} */}
        {chats[chatId]?.messages.map((message, index) => {
          // console.log(chats[chatId]);

          return (
            <Message
              text={message.text}
              to={`${"/user"}/${message.username}`}
              username={message.id == socket.id ? "me" : message.username}
              id={message.id}
              key={index}
              isSelf={message.id == socket.id ? true : false}
            ></Message>
          );
        })}
      </Flex>
      {/* </ScrollArea> */}
      <Group>
        <TextInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleMessages();
            }
          }}
          flex={1}
        ></TextInput>
        <ActionIcon size={"lg"} variant="filled">
          <FaPaperPlane size={"60%"} onClick={handleMessages}></FaPaperPlane>
        </ActionIcon>
      </Group>
    </Flex>
  );
}
