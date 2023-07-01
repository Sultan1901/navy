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
  Button,
  Input,
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
  const [show, setShow] = useState(false);

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
        member,
        position,
        patrol,
        date,
        day,
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
            <Table colorScheme="teal" variant="simple">
              <Thead>
                <Tr>
                  <Th>آلاسم</Th>
                  <Th>الرتبه</Th>
                  <Th>آلدوريه</Th>
                  <Th>آلايام</Th>
                  <Th>التاريخ</Th>
                </Tr>
              </Thead>
              {members.map((e, i) => {
                return (
                  <Tbody key={i}>
                    <Tr>
                      <Td>{e.member}</Td>
                      <Td>{e.position}</Td>
                      <Td>{e.patrol}</Td>
                      <Td>{e.day}</Td>
                      <Td>{e.date.slice(0, 10)}</Td>
                      <DeleteIcon onClick={() => deleteMember(e._id)} />
                    </Tr>
                  </Tbody>
                );
              })}
            </Table>
          </TableContainer>

          <VStack pt={2} border={2}>
            {show ? (
              <>
                <Input
                  w="50"
                  textAlign="center"
                  placeholder="الاسم"
                  onChange={e => {
                    setMember(e.target.value);
                  }}
                />
                <Input
                  w="50"
                  textAlign="center"
                  placeholder="الدوريه"
                  onChange={e => {
                    setPatrol(e.target.value);
                  }}
                />
                <Input
                  w="50"
                  textAlign="center"
                  placeholder="الرتبه"
                  onChange={e => {
                    setPosition(e.target.value);
                  }}
                />{' '}
                <Input
                  w="50"
                  textAlign="center"
                  placeholder="الايام"
                  onChange={e => {
                    setDay(e.target.value);
                  }}
                />
                <AddIcon onClick={addMembers} />
              </>
            ) : (
              <Button
                onClick={() => {
                  setShow(true);
                }}
              >
                اضافة عنصر
              </Button>
            )}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
