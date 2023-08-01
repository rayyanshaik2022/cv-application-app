import {
  Box,
  Heading,
  Divider,
  Grid,
  Flex,
  UnorderedList,
  ListItem,
  Center,
} from "@chakra-ui/react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convertDate(date) {
  const dateObj = new Date(date);

  if (date == "") {
    return "Did not graduate";
  }

  return `${MONTHS[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
}

function Resume(props) {
  return (
    <Box p={{ base: "0px", xl: "20px" }}>
      <Flex flexDir={"column"} gap="12px">
        <Heading>
          {props.info.personalInfo.firstName} {props.info.personalInfo.lastName}
        </Heading>

        <Divider my="5px"></Divider>

        <Grid templateColumns={"repeat(2, 1fr)"}>
          <p>
            <b>Email</b> - {props.info.personalInfo.email}
          </p>
          <p>
            <b>Phone Number</b> - {props.info.personalInfo.phone}
          </p>
        </Grid>

        <Divider my="5px"></Divider>

        <Heading as="h2" size="lg">
          Education
        </Heading>

        <UnorderedList styleType="none">
          {props.info.educationInfo.map((item) => (
            <ListItem mb={2} key={item.id}>
              <Heading as="h3" size="md" mb={"4px"}>
                {item.school}
              </Heading>

              <Grid templateColumns={"repeat(2, 1fr)"}>
                <Flex flexDir={"column"}>
                  <p>
                    <i>{item.degree}</i>
                  </p>
                  <p>
                    <i>{convertDate(item.grad)}</i>
                  </p>
                </Flex>
                <p>{item.desc}</p>
              </Grid>
            </ListItem>
          ))}
        </UnorderedList>

        <Divider my="5px"></Divider>
        <Flex align={"center"} flexDir={"column"}>
          <Heading as="h2" size="lg">
            Skills
          </Heading>
          <p>
            {props.info.skillsInfo.map((item) => item.skill).join(", ")}
          </p>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Resume;
