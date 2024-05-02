import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const question = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (selectedOption === question.correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz is finished
      alert(`Quiz finished! Your score: ${score}/${questions.length}`);
    }
  };

  return (
    <Box p={5}>
      <FormControl as="fieldset">
        <FormLabel as="legend">{question.questionText}</FormLabel>
        <RadioGroup onChange={setSelectedOption} value={selectedOption}>
          <Stack direction="column">
            {question.options.map((option) => (
              <Radio key={option} value={option}>
                {option}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleNextQuestion}>
        Next Question
      </Button>
      <Text mt={4}>Score: {score}</Text>
    </Box>
  );
};

export default Quiz;
