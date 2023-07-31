import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Grid,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Flex,
  AccordionButton,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";

function EducationItem(props) {
  const [schoolName, setSchoolName] = useState(props.school == null ? "" : props.school);
  let handleSchoolNameChange = (e) => {
    let inputValue = e.target.value;
    setSchoolName(inputValue);
  };

  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple mb={"20px"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h2" size="sm">
                {schoolName != "" ? schoolName : "Unknown School"}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={2}>
            <Grid templateColumns="repeat(2, 1fr)" gap={"30px"} rowGap={"20px"}>
              <FormControl variant="floating" isRequired>
                <Input
                  placeholder=" "
                  variant="outline"
                  bg={"gray.50"}
                  value={schoolName}
                  onChange={handleSchoolNameChange}
                />
                <FormLabel>School</FormLabel>
              </FormControl>

              <FormControl variant="floating">
                <Input
                  placeholder=" "
                  size="md"
                  type="date"
                  variant="outline"
                  bg={"gray.50"}
                />
                <FormLabel>Graduation Date</FormLabel>
              </FormControl>

              <FormControl variant="floating" gridColumn="1/-1" isRequired>
                <Input placeholder=" " variant="outline" bg={"gray.50"} />
                <FormLabel>Degree</FormLabel>
              </FormControl>

              <FormControl variant="floating" gridColumn="1/-1" isRequired>
                <Textarea variant="outline" bg={"gray.50"} />
                <FormLabel>Description</FormLabel>
              </FormControl>
            </Grid>
            <Flex mt={"20px"} justifyContent={"right"}>
              <Button colorScheme="red">Remove</Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default EducationItem;
