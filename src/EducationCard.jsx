import { Card, Heading, Button } from "@chakra-ui/react";
import EducationItem from "./EducationItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function EducationCard() {
  const educationItems = [
    {
      school: "University of Pennsylvania",
      id: uuidv4(),
    },
  ];
  const [eduItems, setEduItems] = useState(educationItems);

  let handleAddItem = () => {
    setEduItems([
      ...eduItems,
      {
        item: "",
        id: uuidv4(),
      },
    ]);
  };

  let handleRemoveItem = (id) => {
    setEduItems(eduItems.filter((item) => item.id != id));
  };

  return (
    <Card p={"20px"}>
      <Heading as="h1" size="lg" mb="20px">
        Education
      </Heading>

      {eduItems.map((item) => (
        <EducationItem
          key={item.id}
          school={item.school}
          id={item.id}
          removeHandle={handleRemoveItem}
        />
      ))}

      <Button
        colorScheme="blue"
        size={"sm"}
        width={"140px"}
        onClick={handleAddItem}
      >
        + Add Education
      </Button>
    </Card>
  );
}

export default EducationCard;
