import { Text, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import generateRandomGradient from "../../../../utils/generateRandomGradient";
type MessageProps = {
  text: string;
  username: string;
  id: string;
  isSelf: boolean;
  to: string;
};

export default function Message({
  text,
  username,
  id,
  to,
  isSelf,
}: MessageProps) {
  // console.log(to);

  const navigate = useNavigate();
  return (
    <Group>
      {/* <Text>{generateRandomGradient("gk").to}</Text> */}
      <Text
        style={{ cursor: "pointer" }}
        fw={"bold"}
        variant={isSelf ? "text" : "gradient"}
        // variant={isSelf ? "gradient" : "text"}
        // c={isSelf && "violet"}
        c={"violet"}
        gradient={generateRandomGradient(username)}
        onClick={() => {
          navigate(to, { state: { chatId: id } });
        }}
      >
        {username}
      </Text>
      <Text>{text}</Text>
    </Group>
  );
}
