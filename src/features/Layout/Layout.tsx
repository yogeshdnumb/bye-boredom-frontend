import { AppShell } from "@mantine/core";
// import classes from "./Home.module.scss";
import Header from "@src/features/Header/Header";
import Navbar from "@src/features/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";

export default function Layout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      // padding={0}
      // padding={"md"}
      // withBorder={true}
    >
      <Header
        toggleMobile={toggleMobile}
        toggleDesktop={toggleDesktop}
        mobileOpened={mobileOpened}
        desktopOpened={desktopOpened}
      ></Header>
      <Navbar toggleMobile={toggleMobile}></Navbar>
      <AppShell.Main h={"100%"}>
        <Outlet></Outlet>
      </AppShell.Main>
      <Notifications></Notifications>
    </AppShell>
  );
}
