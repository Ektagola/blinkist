import React from "react"
import {
  ListItem,
  UnorderedList,
  FormControl,
  FormLabel,
  Button,
  Select,
  Input,
  Container,
  SimpleGrid,
  Stack,
  Textarea,
  chakra,
  Box,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { InputGroup } from "@chakra-ui/react"

export default function GetInTouch() {
  return (
    <Box bgColor={"#f1f6f4"}>
      <Container maxW={"5xl"} py={{ lg: 20, base: 10}}>
        <SimpleGrid columns={{ lg: 2, md: 1 }} spacing={{ lg: 24, sm: 20, base: 10}}>
          <Stack>
            <chakra.h1 fontWeight={"bold"} fontSize="5xl" color={"#0D254A"}>
              Get in touch
            </chakra.h1>
            <chakra.p fontSize={{ lg: "20px", sm: "18px", base: "16px"}} pt={15} color="#0C2C5B">
              See why over 1,500 organizations have partnered with Blinkist to
              empower their people with powerful ideas.
            </chakra.p>
            <chakra.h2
              pt={10}
              fontWeight={"bold"}
              fontSize="xl"
              color={"#0D254A"}
            >
              In this call, you'll learn:
            </chakra.h2>
            <Box borderLeft={"solid"} borderLeftColor="#0D254A">
              <UnorderedList fontSize={{ lg: "20px", sm: "18px", base: "16px"}} color={"#0D254A"} px={5}>
                <ListItem py={3}>
                  How our 5-star rated app helps more than 22 million people
                  learn anytime, anywhere
                </ListItem>
                <ListItem py={3}>
                  How we can enhance your existing L&D program and help you
                  achieve your goals
                </ListItem>
                <ListItem py={3}>
                  How we support you through planning, launching, and driving
                  long-term success with our solution
                </ListItem>
              </UnorderedList>
            </Box>
            <chakra.p fontSize={"16px"} color={"#0365f2"}>
              If you want Blinkist Business for a team of up to 50 people, you
              can buy it directly from the
            </chakra.p>
            <Link to="#">
              <chakra.span
                color="#0365f2"
                textDecoration={"underline"}
                fontWeight={"medium"}
                fontSize={"16px"}
              >
                Teams Plan
              </chakra.span>
            </Link>
          </Stack>
          <Stack p={5} bgColor={"white"} borderRadius="10px">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>

              <InputGroup>
                <Input type="email" name="email" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>

              <InputGroup>
                <Input type="text" name="name" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Company name</FormLabel>

              <InputGroup>
                <Input type="text" name="company name" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>

              <InputGroup>
                <Input type="text" name="frist name" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>

              <InputGroup>
                <Input type="text" name="last name" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Telephone</FormLabel>

              <InputGroup>
                <Input type="number" name="phone" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select placeholder=" ">
                <option>China</option>
                <option>India</option>
                <option>United State</option>
                <option>Indonesia</option>
                <option>Pakistan</option>
                <option>Brazil</option>
                <option>Nigeria</option>
                <option>Bangladesh</option>
                <option>Russia</option>
                <option>Mexico</option>
                <option>Japna</option>
                <option>Ethiopia</option>
                <option>Philippines</option>
                <option>Egypt</option>
                <option>Vietnam</option>
                <option>DR Congo</option>
                <option>Turkey</option>
                <option>Iran</option>
                <option>Germany</option>
                <option>Thailand</option>
                <option>United Kingdom</option>
                <option>France</option>
                <option>Italy</option>
                <option>Tanzania</option>
                <option>South Africa</option>
                <option>Myanmar</option>
                <option>Kenya</option>
                <option>South Korea</option>
                <option>Colombia</option>
                <option>Spain</option>
                <option>Uganda</option>
                <option>Argentina</option>
                <option>Algeria</option>
                <option>Sudan</option>
                <option>Ukraine</option>
                <option>Iraq</option>
                <option>Afghanistan</option>
                <option>Poland</option>
                <option>Canada</option>
                <option>Morocco</option>
                <option>Saudi Arabia</option>
                <option>Uzbekistan</option>
                <option>Peru</option>
                <option>Angola</option>
                <option>Malaysia</option>
                <option>Mozambique</option>
                <option>Ghana</option>
                <option>Yemen</option>
                <option>Nepal</option>
                <option>Venezuela</option>
                <option>Madagascar</option>
                <option>Cameroon</option>
                <option>Côte d'Ivoire</option>
                <option>North Korea</option>
                <option>Austraila</option>
                <oprion>Niger</oprion>
                <oprion>Sri Lanka</oprion>
                <oprion>Mali</oprion>
                <oprion>Romania</oprion>
                <oprion>Malawi</oprion>
                <oprion>Chile</oprion>
                <oprion>Kazakhstan</oprion>
                <oprion>Zambia</oprion>
                <oprion>Guatemala</oprion>
                <oprion>Ecuador</oprion>
                <oprion>Syria</oprion>
                <oprion>Netherlands</oprion>
                <oprion>Senegal</oprion>
                <oprion>Cambodia</oprion>
                <option>Chad</option>
                <option>Somalia</option>
                <option>Zimbabwe</option>
                <option>Guinea</option>
                <option>Conakry</option>
                <option>Rwanda</option>
                <option>Benin</option>
                <option>Burundi</option>
                <option>Tunisia</option>
                <option>Bolivia</option>
                <option>Belgium</option>
                <option>Haiti</option>
                <option>Cuba</option>
                <option>South Sudan</option>
                <option>Dominican Republic</option>
                <option>Czech Republic (Czechia)</option>
                <option>Greece</option>
                <option>Jordan</option>
                <option>Portugal</option>
                <option>Azerbaijan</option>
                <option>Sweden</option>
                <option>Honduras</option>
                <option>United Arab Emirates</option>
                <option>Hungary</option>
                <option>Tajikistan</option>
                <option>Belarus</option>
                <option>Austria</option>
                <option>Papua New Guinea</option>
                <option>Serbia</option>
                <option>Israel</option>
                <option>Switzerland</option>
                <option>Togo</option>
                <option>Sierra Leone</option>
                <option>Laos</option>
                <option>Paraguay</option>
                <option>Bulgaria</option>
                <option>Libya</option>
                <option>Lebanon</option>
                <option>Nicaragua</option>
                <option>Kyrgyzstan</option>
                <option>El Salvador</option>
                <option>Turkmenistan</option>
                <option>Singapore</option>
                <option>Denmark</option>
                <option>Finland</option>
                <option>Congo</option>
                <option>Slovakia</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>State of Palestine</option>
                <option>Costa Rica</option>
                <option>Liberia</option>
                <option>Ireland</option>
                <option>Central African Republic</option>
                <option>New Zealand</option>
                <option>Mauritania</option>
                <option>Panama</option>
                <option>Kuwait</option>
                <option>Croatia</option>
                <option>Moldova</option>
                <option>Georgia</option>
                <option>Eritrea</option>
                <option>Uruguay</option>
                <option>Bosnia and Herzegovina</option>
                <option>Mongolia</option>
                <option>Armenia</option>
                <option>Jamaica</option>
                <option>Qatar</option>
                <option>Albania</option>
                <option>Lithuania</option>
                <option>Namibia</option>
                <option>The Gambia</option>
                <option>Botswana</option>
                <option>Gabon</option>
                <option>Lesotho</option>
                <option>North Macedonia</option>
                <option>Slovenia</option>
                <option>Guinea-Bissau</option>
                <option>Latvia</option>
                <option>Bahrain</option>
                <option>Equatorial Guinea</option>
                <option>Trinidad and Tobago</option>
                <option>Estonia</option>
                <option>Timor</option>-Leste
                <option>Mauritius</option>
                <option>Cyprus</option>
                <option>Nicosia</option>
                <option>Eswatini</option>
                <option>Djibouti</option>
                <option>Fiji</option>
                <option>Comoros</option>
                <option>Guyana</option>
                <option>Bhutan</option>
                <option>Solomon Islands</option>
                <option>Montenegro</option>
                <option>Luxembourg</option>
                <option>Suriname</option>
                <option>Cabo Verde</option>
                <option>Micronesia</option>
                <option>Maldives</option>
                <option>Malta</option>
                <option>Brunei</option>
                <option>Belize</option>
                <option>Bahamas</option>
                <option>Iceland</option>
                <option>Vanuatu</option>
                <option>Barbados</option>
                <option>Sao Tome & Principe</option>
                <option>Samoa</option>
                <option>Saint Lucia</option>
                <option>Kiribati</option>
                <option>Grenada</option>
                <option>St. Vincent & Grenadines</option>
                <option>Tonga</option>
                <option>Seychelles</option>
                <option>Antigua and Barbuda</option>
                <option>Andorra</option>
                <option>Dominica</option>
                <option>Marshall Islands</option>
                <option>Saint Kitts & Nevis</option>
                <option>Monaco</option>
                <option>Liechtenstein</option>
                <option>San Marino</option>
                <option>Palau</option>
                <option>Tuvalu</option>
                <option>Nauru</option>
                <option>Holy See</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>
                Please tell us more about why you’d like Blinkist Business
              </FormLabel>

              <Textarea name="message" rows={6} resize="none" />
            </FormControl>

            <Button bg="#2cde80" color="#0D254A">
              Book demo
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
