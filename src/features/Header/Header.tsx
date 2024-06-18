import {
  ActionIcon,
  AppShell,
  Text,
  Group,
  Burger,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";

import { socket } from "@src/utils/socket";
import { PiFlower, PiFlowerBold, PiFlowerLotusDuotone } from "react-icons/pi";
import { RxMoon, RxSun } from "react-icons/rx";
import { Link } from "react-router-dom";
export default function Header({
  toggleDesktop,
  toggleMobile,
  mobileOpened,
  desktopOpened,
}) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  return (
    <AppShell.Header p={"sm"}>
      <Group h={"100%"} justify="space-between">
        <Group gap={"sm"} align="center">
          {/* <ActionIcon
            // component="button"
            size={"lg"}
            variant="transparent"
            hiddenFrom="sm"
            c={"dark"}
          > */}
          <Burger opened={mobileOpened} onClick={toggleMobile}></Burger>
          {/* </ActionIcon> */}
          {/* <ActionIcon
            // component="button"
            size={"lg"}
            variant="subtle"
            onClick={toggleDesktop}
            visibleFrom="sm"
            c={"dark"}
          >
            <Burger opened={desktopOpened}></Burger>
          </ActionIcon> */}
          <ActionIcon size={"lg"} variant="subtle">
            <PiFlower size={"90%"} />
          </ActionIcon>

          <Text size="xl" fw={"bold"} c={"violet"} component={Link} to={"/"}>
            Bye Boredom
          </Text>
          {/* <Text c={"violet"}>{socket.username}</Text> */}
        </Group>
        <ActionIcon
          // c={"dark"}
          variant="subtle"
          // c={"gray"}
          size={"lg"}
          onClick={() => {
            setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
          }}
        >
          {computedColorScheme === "light" ? (
            <RxMoon size={"70%"} />
          ) : (
            <RxSun size={"70%"} />
          )}
        </ActionIcon>
      </Group>
    </AppShell.Header>
  );
}
