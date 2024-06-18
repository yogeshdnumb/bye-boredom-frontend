import { AppShell } from "@mantine/core";
import Chat from "@features/Chat/Chat";

export default function Main() {
  return (
    <AppShell.Main>
      <Chat></Chat>
    </AppShell.Main>
  );
}
