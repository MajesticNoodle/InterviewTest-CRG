import { useEffect, useState } from 'react';
import '../App.css';
import {Center, Image, Text, Spinner, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';


function TableComponent() {
  const [youTubeData, setYouTubeData] = useState();
  const url = 'https://arthurfrost.qflo.co.za/';
  const [page, setPage] = useState(1);
  
  // DEFINE APICALL
  function getData(){
    // CORS Preventing async(getTimeline.js)
    // getTimeline();
    fetch(url+'php/getTimeline.php')
    .then((result) => result.json())
    .then((data) => setYouTubeData(data))
  }

  // CALL APICALL
  useEffect(() => { 
    getData()
  },[])
  
    if (youTubeData === undefined) {
        return (
          <Spinner thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'/>
        );
      }else{
        return (
          <>
    
        {/* TABLE START - HEADER */}
        <TableContainer>
          <Table variant='striped'>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Image</Th>
                <Th>Audio</Th>
              </Tr>
            </Thead>
            <Tbody>
            {/* OBJECT/ARRAY START */}
            {Object.entries(youTubeData)
              .map(([key, values]) => (
                  values.slice(page * 7 - 7, page * 7).map(row => (
                    (key === "Body") ?
                    <></>
                    :
                    <Tr key={row.Id}>
                      <Td>{row.Id}</Td>
                      <Td>{row.Title}</Td>
                      <Td maxW="250px" overflow="auto">{row.Description}</Td>
                      <Td>
                        <Image
                          objectFit='cover'
                          maxW={{ base: '100%', sm: '200px' }}
                          src={url+row.Image}
                          alt='Image'/>
                      </Td>
                      <Td>
                        <ReactAudioPlayer
                          src={url+row.Audio}
                          controls
                        />
                      </Td>
                    </Tr>
                  ))
              ))
            }
            </Tbody>
          </Table>
          <Center m={4}>
              <Button colorScheme='twitter' variant='outline' isDisabled={page === 1 ? true : false} onClick={() => setPage(page - 1)}>
                Prev
              </Button>
              <Text m={4}>{page} / {Math.ceil(youTubeData.Timeline.length / 7)}</Text>
              <Button colorScheme='twitter' variant='outline' isDisabled={Math.ceil(youTubeData.Timeline.length / 7) === page ? true : false} onClick={() => setPage(page + 1)}>
                Next
              </Button>
            </Center>
        </TableContainer>
      </>
    
        );
      }
    }

export default TableComponent