import React, { useState } from "react";
import { Container, ToggleLabel, ToggleSelect } from "./styles";

const Toggle: React.FC = () => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelect
        checked={switchOn}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => setSwitchOn(!switchOn)}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
