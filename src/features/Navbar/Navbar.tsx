import {
  ActionIcon,
  AppShell,
  Group,
  NavLink,
  Stack,
  Tooltip,
  Text,
  Divider,
} from "@mantine/core";
import { NavLink as RouterLink } from "react-router-dom";
import { FaRegMessage } from "react-icons/fa6";
import { useContext, useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { chatsContext } from "@src/contexts/chats.context";
import { FaDotCircle } from "react-icons/fa";

const mainLinks = [
  { name: "home", icon: FaHouse, to: "/" },
  { name: "messages", icon: FaRegMessage, to: "/" },
];
// const subLinks = {
//   home: [
//     { icon: "", name: "Home", to: "/" },
//     { icon: "", name: "Friends", to: "/friends" },
//     { icon: "", name: "Profile", to: "/profile" },
//   ],
//   rooms: [
//     { icon: "", name: "General", to: "/chat/general" },
//     { icon: "", name: "Anime", to: "/chat/anime" },
//     { icon: "", name: "India", to: "/chat/india" },
//   ],
// };

export default function Navbar({ toggleMobile }) {
  // const location = useLocation();
  // const { chatId } = location.state;
  // console.log(location);

  const { chats, setChats } = useContext(chatsContext);
  return (
    <AppShell.Navbar p={"sm"}>
      <Group>
        <Stack flex={1}>
          <Stack>
            {Object.values(chats)
              .filter((chat) => chat.isRoom)
              .map((chat) => {
                return (
                  <NavLink
                    key={chat.id}
                    label={
                      <Text>
                        {chat.name.substring(0, 10)}{" "}
                        {chat.hasNewMessages && <FaDotCircle />}
                      </Text>
                    }
                    component={RouterLink}
                    to={`/${chat.isRoom ? "room" : "user"}/${chat.name}`}
                    state={{ chatId: chat.id }}
                    onClick={() => {
                      toggleMobile();
                      setChats({
                        ...chats,
                        [chat.id]: { ...chat, hasNewMessages: false },
                      });
                    }}
                  ></NavLink>
                );
              })}
          </Stack>
          <Divider size={"md"} flex={1} />

          <Stack>
            {Object.values(chats)
              .filter((chat) => !chat.isRoom)
              .map((chat) => {
                return (
                  <NavLink
                    key={chat.id}
                    label={
                      <Text>
                        {chat.name.substring(0, 20)}{" "}
                        {chat.hasNewMessages && <FaDotCircle />}
                      </Text>
                    }
                    component={RouterLink}
                    to={`/${chat.isRoom ? "room" : "user"}/${chat.name}`}
                    state={{ chatId: chat.id }}
                    onClick={() => {
                      setChats({
                        ...chats,
                        [chat.id]: { ...chat, hasNewMessages: false },
                      });
                    }}
                  ></NavLink>
                );
              })}
          </Stack>
        </Stack>
      </Group>
    </AppShell.Navbar>
  );
}
