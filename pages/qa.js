import { useState } from 'react';
import {
  Container,
  Box,
  Heading,
  Textarea,
  Button,
  useToast
} from '@chakra-ui/react';

export default function QandA() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!question.trim()) {
      toast({
        title: 'Please enter a math question.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Here we would handle the submission to the LLAMA-3 model
    // For now, we'll just simulate an answer
    const simulatedAnswer = `Simulated step-by-step answer for the question: ${question}`;
    setAnswer(simulatedAnswer);
  };

  return (
    <Container centerContent>
      <Box w="100%" p={4}>
        <Heading as="h1" size="xl" mb={6}>
          Q&A
        </Heading>
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder="Enter your math question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            size="sm"
            resize="vertical"
            mb={4}
          />
          <Button colorScheme="teal" type="submit">
            Submit Question
          </Button>
        </form>
        {answer && (
          <Box mt={4}>
            <Heading as="h2" size="md" mb={2}>
              Answer
            </Heading>
            <p>{answer}</p>
          </Box>
        )}
      </Box>
    </Container>
  );
}
