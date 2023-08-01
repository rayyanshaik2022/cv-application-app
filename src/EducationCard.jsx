import { Card, Heading, Button } from "@chakra-ui/react";
import EducationItem from "./EducationItem";
import { v4 as uuidv4 } from "uuid";

function EducationCard(props) {
  const eduItems = props.info;
  const setEduItems = props.setInfo;

  let handleAddItem = () => {
    setEduItems([
      ...eduItems,
      {
        school: "",
        grad: "",
        degree: "",
        desc: "",
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
          setInfo={(newObj) => {
            setEduItems(
              eduItems.map((e) => (e.id === item.id ? newObj : e))
            )
          }}
          info={eduItems.find((e) => e.id == item.id)}
        />
      ))}

      <Button
        colorScheme="blue"
        size={{ base: "xs", sm: "sm" }}
        width={{ base: "110px", sm: "140px" }}
        onClick={handleAddItem}
      >
        + Add Education
      </Button>
    </Card>
  );
}

export default EducationCard;
