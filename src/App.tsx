import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

import { useEffect, useState } from "react";
import { chatsContext } from "./contexts/chats.context";

import Router from "./Router";
import { socket } from "./utils/socket";

export default function App() {
  // const location = useLocation();
  // const { chatId } = location.state();
  const [chats, setChats] = useState({
    general: {
      name: "general",
      id: "general",
      isRoom: true,
      hasNewMessages: false,
      messages: [],
    },
    anime: {
      name: "anime",
      id: "anime",
      isRoom: true,
      hasNewMessages: false,
      messages: [],
    },
    love: {
      name: "love",
      id: "love",
      isRoom: true,
      hasNewMessages: false,
      messages: [],
    },
  });

  useEffect(() => {
    function onConnect() {
      // notifications.show({ message: "connected" });
    }

    function onMessage({ from, to, text, username, isRoom }) {
      const url = window.location.href.split("/");

      // console.log({ from, to, text, username, isRoom });

      const tmp_chats = { ...chats };
      // console.log({ from, to, text, username, isRoom });

      if (isRoom) {
        // console.log(url);
        if (tmp_chats[to] == undefined) {
          // console.log(to);

          tmp_chats[to] = {
            name: username,
            isRoom: true,
            messages: [],
            id: to,
            hasNewMessages: false,
          };
        }
        // tmp_chats[to].hasNewMessages = true;

        if (url[url.length - 1] != to) {
          tmp_chats[to].hasNewMessages = true;
        }
        tmp_chats[to]?.messages.unshift({ id: from, text, username });
      } else {
        // console.log(url);
        if (tmp_chats[from] == undefined) {
          tmp_chats[from] = {
            name: username,
            isRoom: false,
            messages: [],
            id: from,
            hasNewMessages: false,
          };
        }
        if (url[url.length - 1] != username) {
          tmp_chats[from].hasNewMessages = true;
        }
        tmp_chats[from].messages.unshift({ id: from, text, username });
      }
      // console.log(tmp_chats);

      setChats(tmp_chats);
    }

    socket.on("connect", onConnect);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("message", onMessage);
    };
  }, [chats]);
  return (
    <MantineProvider theme={theme}>
      <chatsContext.Provider value={{ chats, setChats }}>
        <Router></Router>
      </chatsContext.Provider>
    </MantineProvider>
  );
}
