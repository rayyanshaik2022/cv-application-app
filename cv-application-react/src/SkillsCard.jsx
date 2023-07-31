import { Card, Heading, Button } from "@chakra-ui/react";
import SkillsItem from "./SkillsItem";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function SkillsCard() {

  const skillsItems = [
    {
      skill: "javascript",
      id: uuidv4(),
    },
  ];

  const [skillsList, setSkillsList] = useState(skillsItems);

  let handleAddSkillBtn = () => {
    let newId = uuidv4();
    setSkillsList([
      ...skillsList,
      {
        skill: "",
        id: newId,
      },
    ]);
  };

  let handleRemoveSkill = (id) => {
    setSkillsList(
        skillsList.filter(item => item.id != id)
    );
  }

  return (
    <Card p={"20px"}>
      <Heading as="h1" size="lg" mb="20px">
        Skills
      </Heading>

      {skillsList.map((item) => ( 
        <SkillsItem key={item.id} id={item.id} skill={item.skill} removeHandle={handleRemoveSkill}/>
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
