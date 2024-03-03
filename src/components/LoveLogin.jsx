import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    // State to hold the input value
    const [inputValue, setInputValue] = useState('');
    let navigate = useNavigate();
  
    // Handler function to update the input value
    const handleInputChange = (e) => {
      const value = e.target.value.replace(/\D/, '');
      setInputValue(value);
    };
  
    // Handler function for form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue == 162596) {
        navigate('/step1');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Enter ours numbers</FormLabel>
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder=""
          />
        </FormControl>
        <Button type="submit" mt={4} colorScheme="teal">
          Go
        </Button>
      </form>
    );
  };  

export default Login