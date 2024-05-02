import { Box, Heading, Link, List, ListItem } from '@chakra-ui/react';

export default function ProblemSets() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Problem Sets
      </Heading>
      <List spacing={3}>
        <ListItem>
          <Link href="/static/addition.pdf" isExternal>
            Download Addition Problems PDF
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/static/subtraction.pdf" isExternal>
            Download Subtraction Problems PDF
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/static/multiplication.pdf" isExternal>
            Download Multiplication Problems PDF
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/static/division.pdf" isExternal>
            Download Division Problems PDF
          </Link>
        </ListItem>
        {/* Static quizzes can be added here in the future */}
      </List>
    </Box>
  );
}
