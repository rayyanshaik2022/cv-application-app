import { Card, Heading, Button, Box } from "@chakra-ui/react";
import SkillsItem from "./SkillsItem";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function SkillsCard() {
  let myId = uuidv4();

  const skillsItems = [
    {
      item: (
        <SkillsItem skill="" id={myId} />
      ),
      id: uuidv4(),
    },
  ];

  const [skillsList, setSkillsList] = useState(skillsItems);

  let handleAddSkillBtn = () => {
    let newId = uuidv4();
    setSkillsList([
      ...skillsList,
      {
        item: (
          <SkillsItem skill="" id={newId} />
        ),
        id: newId,
      },
    ]);
  };

  return (
    <Card p={"20px"}>
      <Heading as="h1" size="lg" mb="20px">
        Skills
      </Heading>

      {skillsList.map((skill) => (
        <Box key={skill.id}>{skill.item}</Box>
      ))}

      <Button
        colorScheme="blue"
        size={"sm"}
        width={"100px"}
        onClick={handleAddSkillBtn}
      >
        + Add Skill
      </Button>
    </Card>
  );
}

export default SkillsCard;
