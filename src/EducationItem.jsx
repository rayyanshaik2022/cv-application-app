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

function EducationItem(props) {
  let handleSchoolNameChange = (e) => {
    let inputValue = e.target.value;
    props.setInfo({ ...props.info, school: inputValue });
  };

  let handleDateChange = (e) => {
    let inputValue = e.target.value;
    props.setInfo({ ...props.info, grad: inputValue });
  };

  let handleDegreeChange = (e) => {
    let inputValue = e.target.value;
    props.setInfo({ ...props.info, degree: inputValue });
  };

  let handleDescriptionChange = (e) => {
    let inputValue = e.target.value;
    props.setInfo({ ...props.info, desc: inputValue });
  };

  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple mb={"20px"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h2" size="sm">
                  {props.info.school != ""
                    ? props.info.school
                    : "Unknown School"}
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
                  value={props.info.school}
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
                  onChange={handleDateChange}
                />
                <FormLabel>Graduation Date</FormLabel>
              </FormControl>

              <FormControl variant="floating" gridColumn="1/-1" isRequired>
                <Input placeholder=" " variant="outline" bg={"gray.50"} onChange={handleDegreeChange}/>
                <FormLabel>Degree</FormLabel>
              </FormControl>

              <FormControl variant="floating" gridColumn="1/-1" isRequired>
                <Textarea variant="outline" bg={"gray.50"} onChange={handleDescriptionChange} />
                <FormLabel>Description</FormLabel>
              </FormControl>
            </Grid>
            <Flex mt={"20px"} justifyContent={"right"}>
              <Button
                colorScheme="red"
                onClick={() => {
                  props.removeHandle(props.id);
                }}
              >
                Remove
              </Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default EducationItem;
