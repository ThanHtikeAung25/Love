import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  let navigate = useNavigate();

  // Handler function to update the input value
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/, '');
    setInputValue(value);
  };

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue == 1625) {
      navigate('/step1');
    }
    else {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Enter ours 4 digits</FormLabel>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder=""
        />
        {isError && (
          <FormErrorMessage>မှတ်မိတော့ဘူးလား</FormErrorMessage>
        )}
      </FormControl>
      <Button type="submit" mt={4} colorScheme="teal">
        Go
      </Button>
    </form>
  );
};

export default Login