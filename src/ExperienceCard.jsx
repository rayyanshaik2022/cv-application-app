import { Card, Heading, Button, Box } from "@chakra-ui/react";
import ExperienceItem from "./ExperienceItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ExperienceCard() {
  const experienceItems = [
    {
      item: <ExperienceItem jobTitle="Software Engineer" employer="Google" />,
      id: uuidv4(),
    },
  ];
  const [expItems, setExpItems] = useState(experienceItems);

  let handleAddExpItem = () => {
    setExpItems([
      ...expItems,
      {
        item: <ExperienceItem jobTitle="" employer=""/>,
        id: uuidv4(),
      },
    ]);
  };
  return (
    <Card p={"20px"}>
      <Heading as="h1" size="lg" mb="20px">
        Work Experience
      </Heading>

      {
        expItems.map((i) => (
            <Box key={i.id}>
                {i.item}
            </Box>
        ))
      }
      <Button
        colorScheme="blue"
        size={"sm"}
        width={"180px"}
        onClick={handleAddExpItem}
      >
        + Add Work Experience
      </Button>
    </Card>
  );
}

export default ExperienceCard;
