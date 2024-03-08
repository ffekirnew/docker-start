import { Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  detailTitle: string;
  children: React.ReactNode;
}
const GameDetailAttribute = ({ detailTitle, children }: Props) => {
  return (<>
    <Heading size="lg" color="gray.600">{ detailTitle }</Heading>
    { children }
  </>)
}

export default GameDetailAttribute;
