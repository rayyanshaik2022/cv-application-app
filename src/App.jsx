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
  Box,
  Button,
  Center,
} from "@chakra-ui/react";

import ExperienceCard from "./ExperienceCard";
import SkillsCard from "./SkillsCard";
import EducationCard from "./EducationCard";

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

            <EducationCard />
            <ExperienceCard />
            <SkillsCard />
            
          </Flex>
        </GridItem>
        <GridItem bg={"gray.700"} as="main" colSpan={{ base: 4 }}>
          <Center>
            <Flex p={"40px"} flexDir={"column"} gap="30px">
              <Box
                width={"54vh"}
                height={"70vh"}
                bg="white"
                borderRadius={"6px"}
              ></Box>
              <Button colorScheme="teal" width={"180px"} alignSelf={"center"}>
                Download as PDF
              </Button>
            </Flex>
          </Center>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
