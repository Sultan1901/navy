import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Grid,
  theme,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import axios from 'axios';
function App() {
  useEffect(() => {
    getMembers();
  }, []);
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState('');
  const [patrol, setPatrol] = useState('');
  const [position, setPosition] = useState('');
  const [active, setActive] = useState(true);
  const [date, setDate] = useState(Date);
  const [day, setDay] = useState('');

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
        member: member,
        position: position,
        patrol: patrol,
        date: date,
      });
      getMembers();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteMember = async id => {
    console.log(id);
    try {
      // eslint-disable-next-line
      const result = await axios.delete(
        `http://localhost:5001/deleteMember/${id}`
      );
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

          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Position</Th>
                  <Th>Patrol</Th>
                </Tr>
              </Thead>
              {members.map((e, i) => {
                return (
                  <>
                    {' '}
                    <Tbody>
                      <Tr>
                        <Td>{e.member}</Td>
                        <Td>{e.position}</Td>
                        <Td>{e.patrol}</Td>
                        <DeleteIcon onClick={() => deleteMember(e._id)} />
                      </Tr>
                    </Tbody>
                  </>
                );
              })}
            </Table>
          </TableContainer>

          <VStack>
            {' '}
            <input
              placeholder="Member Name"
              onChange={e => {
                setMember(e.target.value);
              }}
            />
            <input
              placeholder="Patrol"
              onChange={e => {
                setPatrol(e.target.value);
              }}
            />{' '}
            <input
              placeholder="position"
              onChange={e => {
                setPosition(e.target.value);
              }}
            />{' '}
            <AddIcon onClick={addMembers} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
