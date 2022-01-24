import { useConnect } from "wagmi";
import { Flex, Button } from "../";

export default function AddressInfo() {
  const [{ data, error: _error, loading }, connect] = useConnect();

  return (
    <Flex flex="1">
      {data.connectors.map((x) => (
        <Button key={x.name} onClick={() => connect(x)}>
          {x.name} {loading ? "loading" : ""}
        </Button>
      ))}
    </Flex>
  );
}
