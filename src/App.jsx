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

import { v4 as uuidv4 } from "uuid";

import ExperienceCard from "./ExperienceCard";
import SkillsCard from "./SkillsCard";
import EducationCard from "./EducationCard";
import Resume from "./Resume";
import { useState } from "react";

import { jsPDF } from "jspdf";

const doc = new jsPDF();
console.log(doc);
function downloadPDF() {
  // Source HTMLElement or a string containing HTML.
  var elementHTML = document.querySelector("#cv-box");

  doc.html(elementHTML, {
    callback: function (doc) {
      // Save the PDF
      doc.save("my-cv.pdf");
    },
    x: 15,
    y: 0,
    width: 260, //target width in the PDF document
    windowWidth: 550, //window width in CSS pixels
  });
}

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const educationItems = [
    {
      school: "University of Pennsylvania",
      grad: "",
      degree: "",
      desc: "",
      id: uuidv4(),
    },
  ];
  const [educationInfo, setEducationInfo] = useState(educationItems);

  const experienceItems = [
    {
      jobTitle: "Software Engineer",
      employer: "Google",
      id: uuidv4(),
    },
  ];
  const [experienceInfo, setExperienceInfo] = useState(experienceItems);

  const skillsItems = [
    {
      skill: "javascript",
      id: uuidv4(),
    },
  ];
  const [skillsInfo, setSkillsInfo] = useState(skillsItems);

  return (
    <>
      <Grid templateColumns="repeat(9, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{ base: 9, lg: 5 }}
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
                  <Input
                    placeholder=" "
                    variant="outline"
                    bg={"gray.50"}
                    value={personalInfo.firstName}
                    onChange={(e) => {
                      setPersonalInfo({
                        ...personalInfo,
                        firstName: e.target.value,
                      });
                    }}
                  />
                  <FormLabel>First name</FormLabel>
                </FormControl>

                <FormControl variant="floating" id="last-name" isRequired>
                  <Input
                    placeholder=" "
                    variant="outline"
                    bg={"gray.50"}
                    value={personalInfo.lastName}
                    onChange={(e) => {
                      setPersonalInfo({
                        ...personalInfo,
                        lastName: e.target.value,
                      });
                    }}
                  />
                  <FormLabel>Last name</FormLabel>
                </FormControl>

                <FormControl variant="floating" id="email" isRequired>
                  <Input
                    placeholder=" "
                    variant="outline"
                    bg={"gray.50"}
                    value={personalInfo.email}
                    onChange={(e) => {
                      setPersonalInfo({
                        ...personalInfo,
                        email: e.target.value,
                      });
                    }}
                  />
                  <FormLabel>Email</FormLabel>
                </FormControl>

                <FormControl variant="floating" id="phone" isRequired>
                  <Input
                    placeholder=" "
                    variant="outline"
                    bg={"gray.50"}
                    value={personalInfo.phone}
                    onChange={(e) => {
                      setPersonalInfo({
                        ...personalInfo,
                        phone: e.target.value,
                      });
                    }}
                  />
                  <FormLabel>Phone</FormLabel>
                </FormControl>
              </Grid>
            </Card>

            <EducationCard info={educationInfo} setInfo={setEducationInfo} />
            <ExperienceCard info={experienceInfo} setInfo={setExperienceInfo} />
            <SkillsCard info={skillsInfo} setInfo={setSkillsInfo} />
          </Flex>
        </GridItem>
        <GridItem bg={"gray.700"} as="main" colSpan={{ base: 9, lg: 4 }}>
          <Center>
            <Flex p={"40px"} flexDir={"column"} gap="30px">
              <Box
                width={{ base: "min(54vh, 460px)", xl: "54vh" }}
                height={"70vh"}
                bg="white"
                borderRadius={"6px"}
                overflowY={"auto"}
                id="cv-box"
              >
                <Resume
                  info={{
                    personalInfo,
                    educationInfo,
                    experienceInfo,
                    skillsInfo,
                  }}
                />
              </Box>
              <Button
                colorScheme="teal"
                width={"340px"}
                alignSelf={"center"}
                onClick={downloadPDF}
              >
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
