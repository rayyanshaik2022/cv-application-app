import { Flex, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

function SkillsItem(props) {
  
    const [inputValue, setInputValue] = useState(props.skill != null ? props.skill : "");

    let inputHandler = (e) => {
        let val = e.target.value;
        setInputValue(val);
    }
  
    return (
    <Flex flexDir={"column"} gap={"20px"} mb={"20px"}>
      <Flex gap={"12px"}>
        <Input
          placeholder=" "
          variant="outline"
          bg={"gray.50"}
          value={inputValue}
          onChange={inputHandler}
        />
        <Button colorScheme="red" onClick={() => {props.removeHandle(props.id)}}>Remove</Button>
      </Flex>
    </Flex>
  );
}

export default SkillsItem;
