import { Box, Heading, Link, List, ListItem, VStack } from '@chakra-ui/react';
import Quiz from '../components/Quiz';
import quizData from '../data/quizData';

export default function ProblemSets() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Problem Sets
      </Heading>
      <VStack spacing={8}>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Quizzes
          </Heading>
          <Quiz questions={quizData.addition} />
          <Quiz questions={quizData.subtraction} />
          <Quiz questions={quizData.multiplication} />
          <Quiz questions={quizData.division} />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Downloadable PDFs
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
          </List>
        </Box>
      </VStack>
    </Box>
  );
}
