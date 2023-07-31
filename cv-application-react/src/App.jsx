//import { useState } from "react";
import {
  Grid,
  GridItem,
  Heading,
  Card,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Box,
  Textarea,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid templateColumns="repeat(9, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{ base: 5 }}
          height={{ base: "100vh" }}
          padding={"40px"}
          overflowY={"auto"}
        >
          <Flex flexDir={"column"} gap={"24px"}>
            <Card p={"20px"}>
              <Heading as="h1" size="lg" mb="20px">
                Personal
              </Heading>
              <Grid
                templateColumns="repeat(2, 1fr)"
                gap={"30px"}
                rowGap={"20px"}
              >
                <FormControl variant="floating" id="first-name" isRequired>
                  <Input placeholder=" " variant="outline" bg={"gray.50"} />
                  <FormLabel>First name</FormLabel>
                </FormControl>

                <FormControl variant="floating" id="last-name" isRequired>
                  <Input placeholder=" " variant="outline" bg={"gray.50"} />
                  <FormLabel>Last name</FormLabel>
                </FormControl>

                <FormControl variant="floating" id="email" isRequired>
                  <Input placeholder=" " variant="outline" bg={"gray.50"} />
                  <FormLabel>Email</FormLabel>
                </FormControl>

                <FormControl variant="floating" id="phone" isRequired>
                  <Input placeholder=" " variant="outline" bg={"gray.50"} />
                  <FormLabel>Phone</FormLabel>
                </FormControl>
              </Grid>
            </Card>

            <Card p={"20px"}>
              <Heading as="h1" size="lg" mb="20px">
                Education
              </Heading>

              <Accordion defaultIndex={[0]} allowMultiple mb={"20px"}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Heading as="h2" size="sm">
                          University of Pennsylvania
                        </Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} mt={2}>
                    <Grid
                      templateColumns="repeat(2, 1fr)"
                      gap={"30px"}
                      rowGap={"20px"}
                    >
                      <FormControl variant="floating" isRequired>
                        <Input
                          placeholder=" "
                          variant="outline"
                          bg={"gray.50"}
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

                      <FormControl
                        variant="floating"
                        gridColumn="1/-1"
                        isRequired
                      >
                        <Input
                          placeholder=" "
                          variant="outline"
                          bg={"gray.50"}
                        />
                        <FormLabel>Degree</FormLabel>
                      </FormControl>

                      <FormControl
                        variant="floating"
                        gridColumn="1/-1"
                        isRequired
                      >
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
              <Button colorScheme="blue" size={"sm"} width={"140px"}>
                + Add Education
              </Button>
            </Card>

            <Card p={"20px"}>
              <Heading as="h1" size="lg" mb="20px">
                Work Experience
              </Heading>

              <Accordion defaultIndex={[0]} allowMultiple mb={"20px"}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Heading as="h2" size="sm">
                          Software Engineer @ Google
                        </Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} mt={2}>
                    <Grid
                      templateColumns="repeat(2, 1fr)"
                      gap={"30px"}
                      rowGap={"20px"}
                    >
                      <FormControl variant="floating" isRequired>
                        <Input
                          placeholder=" "
                          variant="outline"
                          bg={"gray.50"}
                        />
                        <FormLabel>Job Title</FormLabel>
                      </FormControl>

                      <FormControl variant="floating" isRequired>
                        <Input
                          placeholder=" "
                          variant="outline"
                          bg={"gray.50"}
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
                        />
                        <FormLabel>End Date</FormLabel>
                      </FormControl>

                      <FormControl
                        variant="floating"
                        gridColumn="1/-1"
                        isRequired
                      >
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
              <Button colorScheme="blue" size={"sm"} width={"140px"}>
                + Add Education
              </Button>
            </Card>
          </Flex>
        </GridItem>
        <GridItem bg={"gray.700"} as="main" colSpan={{ base: 4 }}>
          test
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
