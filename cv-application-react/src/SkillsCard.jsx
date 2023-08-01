import { Card, Heading, Button } from "@chakra-ui/react";
import SkillsItem from "./SkillsItem";
import { v4 as uuidv4 } from "uuid";

function SkillsCard(props) {
  let skillsList = props.info;
  let setSkillsList = props.setInfo;

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
    setSkillsList(skillsList.filter((item) => item.id != id));
  };

  return (
    <Card p={"20px"}>
      <Heading as="h1" size="lg" mb="20px">
        Skills
      </Heading>

      {skillsList.map((item) => (
        <SkillsItem
          key={item.id}
          id={item.id}
          skill={item.skill}
          removeHandle={handleRemoveSkill}
          setInfo={(newObj) => {
            setSkillsList(
              skillsList.map((e) => (e.id === item.id ? newObj : e))
            )
          }}
          info={skillsList.find((e) => e.id === item.id)}
        />
      ))}

      <Button
        colorScheme="blue"
        size={{ base: "xs", sm: "sm" }}
        width={{ base: "80px", sm: "100px" }}
        onClick={handleAddSkillBtn}
      >
        + Add Skill
      </Button>
    </Card>
  );
}

export default SkillsCard;
