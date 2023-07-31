import { Card, Heading, Button, Box } from "@chakra-ui/react";
import EducationItem from "./EducationItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function EducationCard() {
  const educationItems = [
    {
      item: <EducationItem school="University of Pennsylvania" />,
      id: uuidv4(),
    },
  ];
  const [eduItems, setEduItems] = useState(educationItems);

  let handleAddItem = () => {
    setEduItems([
      ...eduItems,
      {
        item: <EducationItem/>,
        id: uuidv4(),
      },
    ]);
  };

  return (
    <Card p={"20px"}>
      <Heading as="h1" size="lg" mb="20px">
        Education
      </Heading>

      {
        eduItems.map((i) => (
            <Box key={i.id}>
                {i.item}
            </Box>
        ))
      }

      <Button colorScheme="blue" size={"sm"} width={"140px"} onClick={handleAddItem}>
        + Add Education
      </Button>
    </Card>
  );
}

export default EducationCard;
