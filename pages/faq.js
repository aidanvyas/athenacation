import { Box, Heading, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

export default function FAQ() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Frequently Asked Questions
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Text as="span" fontWeight="bold">What is Athenacation?</Text>
          <Text as="span"> - Athenacation is an edtech platform focused on teaching math to children through interactive problem sets and Q&A using the LLAMA-3 model.</Text>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Text as="span" fontWeight="bold">How does the Q&A section work?</Text>
          <Text as="span"> - Users can submit math questions, and the LLAMA-3 model provides a step-by-step explanation to help them understand the solution process.</Text>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Text as="span" fontWeight="bold">Is Athenacation free to use?</Text>
          <Text as="span"> - Yes, the current version of Athenacation is free and includes access to all available problem sets and the Q&A section.</Text>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Text as="span" fontWeight="bold">Do I need to create an account?</Text>
          <Text as="span"> - While not required for accessing the content, creating an account allows us to provide a more personalized learning experience in the future.</Text>
        </ListItem>
        {/* Additional FAQs can be added here */}
      </List>
    </Box>
  );
}
