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

function ExperienceItem(props) {
  let handleJobTitleChange = (e) => {
    let inputValue = e.target.value;
    props.setInfo({
      ...props.info,
      jobTitle: inputValue,
    });
  };

  let handleEmployerChange = (e) => {
    let inputValue = e.target.value;
    props.setInfo({
      ...props.info,
      employer: inputValue,
    });
  };

  let handleStartDateChange = (e) => {
    let inputValue = e.target.value;
    props.setInfo({
      ...props.info,
      startDate: inputValue,
    });
  };

  let handleEndDateChange = (e) => {
    let inputValue = e.target.value;
    props.setInfo({
      ...props.info,
      endDate: inputValue,
    });
  };

  let handleDescriptionChange = (e) => {
    let inputValue = e.target.value;
    props.setInfo({
      ...props.info,
      desc: inputValue,
    });
  };

  function getItemTitle(jobTitle, employer) {
    if (jobTitle != "" && employer != "") {
      return jobTitle + " @ " + employer;
    }

    if (jobTitle != "") {
      return jobTitle;
    }

    return "Unknown Title";
  }

  return (
    <Accordion defaultIndex={[0]} allowMultiple mb={"20px"}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading as="h2" size="sm">
                {getItemTitle(props.info.jobTitle, props.info.employee)}
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
                value={props.info.jobTitle}
                onChange={handleJobTitleChange}
              />
              <FormLabel>Job Title</FormLabel>
            </FormControl>

            <FormControl variant="floating" isRequired>
              <Input
                placeholder=" "
                variant="outline"
                bg={"gray.50"}
                value={props.info.employer}
                onChange={handleEmployerChange}
              />
              <FormLabel>Employer</FormLabel>
            </FormControl>

            <FormControl variant="floating">
              <Input
                placeholder=" "
                size="md"
                type="date"
                variant="outline"
                bg={"gray.50"}
                onChange={handleStartDateChange}
              />
              <FormLabel>Start Date</FormLabel>
            </FormControl>

            <FormControl variant="floating">
              <Input
                placeholder=" "
                size="md"
                type="date"
                variant="outline"
                bg={"gray.50"}
                onChange={handleEndDateChange}
              />
              <FormLabel>End Date</FormLabel>
            </FormControl>

            <FormControl variant="floating" gridColumn="1/-1" isRequired>
              <Textarea
                variant="outline"
                bg={"gray.50"}
                onChange={handleDescriptionChange}
              />
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
  );
}

export default ExperienceItem;
