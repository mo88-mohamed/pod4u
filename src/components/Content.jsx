import { useEffect,useState } from "react";
import useApi from "../hooks/useApi";
import Slider from "./slider";
import Card, { CardContent, CardFooter, CardImage } from "./Card";
import AudioPlayer from "./AudioPlayer";
import LisTable from "./Table";
import sha1 from "js-sha1";
import { Box,Flex,Text } from "@chakra-ui/react";
import { backendUrls } from "../hooks/useApi";
import { PodcatsItem } from "../pages/Podcast";

// import PodcastIndexClient from "podcastdx-client";

const Content = () => {
    
    // const api =useApi();
    const [podcasts, setPodcasts] = useState([]);

    const columns = [
        {
            id:'number',
            accessorKey:'id',
            header:'#',
            cell: ({getValue,row})=>{
                const {index} = row

                return <Text>{index+1}</Text>
            }
        },
        {
            id: 'title',
            accessorKey: 'title',
            header: 'Title',
            cell: ({getValue,row}) =>{
                // console.log(row);
                // console.log(row.getValue());
                // console.log('row',row.original)
                const value = getValue();
                console.log(value);

                return <Text>{value}</Text>
            } 
        },
        {
            id: 'podcast_name',
            accessorKey: 'feedTitle',
            header: 'podcast Name',
            cell: ({getValue}) =>{
                const value = getValue();

                return <Text>{value}</Text>
            }         },
        {
            id: 'date',
            accessorKey: 'datePublishedPretty',
            header: 'Date',
            cell: ({getValue}) =>{
                const value = getValue();
                console.log(value);

                return <Text>{value}</Text>
            }       

         }
    ];
    const headers = ['title', 'podcast_name', 'date'];
        const data = [
            { title: 'Title 1', podcast_name: 'Author 1', date: '2021-09-01' },
            { title: 'Title 2', podcast_name: 'Author 2', date: '2021-09-02' },
            { title: 'Title 3', podcast_name: 'Author 3', date: '2021-09-03' },
            { title: 'Title 4', podcast_name: 'Author 4', date: '2021-09-04' },

        ]

    // console.log('hash',hash);

    const {getData} = useApi();
    const url = backendUrls.recentPodcasts;

    useEffect(() => {

        getData({url:url,success:(data)=>{
            console.log(data);
            setPodcasts(data?.feeds);
        },fail:(error)=>{
            console.log(error);
        }})

    }, []);
    return ( 
        <>
            {/* <Slider/> */}
            {/* <Text>Content</Text> */}
            <Box style={{display:'flex',flexDirection:'column' ,gap:'10px',padding:'10px',width:'90%' ,margin:'auto', marginBottom:'80px'}}>
                <Text fontSize='2xl' fontWeight='bold'>Recent Episodes</Text>
                {/* {
                   Array.from({ length: 5 }).map((item, index) => {
                        return(
                            <Card key={`${item?.guid}_${item?.id}`} type="horizontal" style={{width:'90%'}} >
                                <CardImage src={item?.feedImage?item?.feedImage:'https://via.placeholder.com/150'} alt='podcast'/>
                                <div>
                                <CardContent item={{title:item?.title||'Title',description:item?.description||'Description',author:item?.feedTitle||'Author'}}/>
                                <CardFooter item={{date:item?.datePublishedPretty||'N/A',author:item?.feedTitle||'Author'}}/>
                                </div>
                               
                            </Card>
                        )
                    })

                } */}
                <Flex flexDirection={'column'} gap={'10px'} width={'100%'} overflow={'auto'} margin={'10px'} marginBottom={'50px'}>
                   {/* <LisTable columns={columns} data={podcasts} headers={headers} /> */}
                   {
                    podcasts && podcasts.length > 0 ? podcasts.map((podcast, index) => {

                        return(
                            <PodcatsItem key={`${podcast?.guid}_${index}`} title={podcast?.title} image={podcast?.image} date={podcast?.datePublishedPretty} description={podcast?.description} url={podcast?.enclosureUrl} type="pod" feedID={podcast?.id} />
                        );
                    }):<Text>No Podcasts Found</Text>
                   }

                </Flex>
                {/* <AudioPlayer /> */}

            </Box>
        </>
     );
}
 
export default Content;