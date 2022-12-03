import React from "react";
import { Container } from "./Reuseable.styles";

interface Props {
  label: string;
}

const LabelButton: React.FC<Props> = (props) => {
  // event.target?
  // useRef?
  return (
    <>
      <p>{props.label.toLocaleUpperCase()}</p>
      <button>OVER HERE</button>
    </>
  );
};

const Reuseable: React.FC = () => {
  return (
    <Container>
      <LabelButton label="Click the button below" />
    </Container>
  );
};

export default Reuseable;
