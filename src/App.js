import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  let member = [];
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <OrderedList>
              <>
                {member.map((e, i) => {
                  return (
                    <>
                      <ListItem>
                        {e.name} {e.age}
                      </ListItem>
                    </>
                  );
                })}
              </>
            </OrderedList>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
