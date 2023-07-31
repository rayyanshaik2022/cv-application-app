import { Flex, Input, Button } from "@chakra-ui/react";

function SkillsItem(props) {
  return (
    <Flex flexDir={"column"} gap={"20px"} mb={"20px"}>
      <Flex gap={"12px"}>
        <Input placeholder=" " variant="outline" bg={"gray.50"} value={props.skill}/>
        <Button colorScheme="red" onClick={console.log(props.handleRemove)}>Remove</Button>
      </Flex>
    </Flex>
  );
}

export default SkillsItem;
