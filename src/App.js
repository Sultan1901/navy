import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import axios from 'axios';
function App() {
  useEffect(() => {
    getMembers();
  }, []);
  const [members, setMembers] = React.useState([]);
  const [newMember, setNewMember] = React.useState('');

  const getMembers = async () => {
    try {
      const result = await axios.get('http://localhost:5001/getMember');
      setMembers(result.data);
    } catch (error) {
      // console.log(error);
    }
  };
  const addMembers = async () => {
    try {
      // eslint-disable-next-line
      const result = await axios.post('http://localhost:5001/addMember', {
        name: newMember,
      });
      getMembers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <OrderedList>
              <>
                {members.map((e, i) => {
                  return (
                    <div key={i}>
                      <ListItem>{e.name}</ListItem>
                    </div>
                  );
                })}
              </>
              <input
                onChange={e => {
                  setNewMember(e.target.value);
                }}
              />
              <button onClick={addMembers}>add</button>
            </OrderedList>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
