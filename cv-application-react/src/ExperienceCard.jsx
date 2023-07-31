import { Card, Heading, Button, Box } from "@chakra-ui/react";
import ExperienceItem from "./ExperienceItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ExperienceCard() {
  const experienceItems = [
    {
      jobTitle: "Software Engineer",
      employer: "Google",
      id: uuidv4(),
    },
  ];
  const [expItems, setExpItems] = useState(experienceItems);

  let handleAddExpItem = () => {
    setExpItems([
      ...expItems,
      {
        jobTitle: "",
        employer: "",
        id: uuidv4(),
      },
    ]);
  };

  let handleRemoveExpItem = (id) => {
    setExpItems(expItems.filter((item) => item.id != id));
  };

  return (
    <Card p={"20px"}>
      <Heading as="h1" size="lg" mb="20px">
        Work Experience
      </Heading>

      {expItems.map((item) => (
        <ExperienceItem
          key={item.id}
          id={item.id}
          jobTitle={item.jobTitle}
          employer={item.employer}
          removeHandle={handleRemoveExpItem}
        />
      ))}
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
