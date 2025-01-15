import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { useAudio } from "../context/audioContext";
import { useLocation, useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi";
import { backendUrls } from "../hooks/useApi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "../components/loading";

import img from '../assets/gray.jpg'

const Podcast = ({}) => {
    const location = useLocation();
    const [podcastName, setPodcastName] = useState('name');
    const [podcastMetaData, setPodcastMetaData] = useState({});//[title,author,description,coverImage
    const [author, setAuthor] = useState('author');
    const [episodes, setEpisodes] = useState([]);
    const {getData} = useApi();
    const podcastMetaDataUrl = backendUrls.podcastData;
    const podcastEpisodesUrl = backendUrls.podcastEpisodes;
    const path = location.pathname.split('/');
    const podcastID = path[path.length-1];
    const [loading , setLoading] = useState(true);
    // console.log(podcastID);
    // console.log(location.pathname.split('/'));
    
    useEffect(()=>{
        // console.log(location);
        getData({url:podcastMetaDataUrl+podcastID,success:(data)=>{
            console.log(data);
            // setPodcastName(data?.feed?.title);
            // setAuthor(data?.feed?.author);
            setPodcastMetaData(data?.feed);
            setLoading(false);

            // setEpisodes(data?.episodes);
        },
        fail:(error)=>{
            console.log(error);
            setLoading(false);
        }
    });
            //get episodes
            getData({url:podcastEpisodesUrl+podcastID,success:(data)=>{
                console.log(data);
                setEpisodes(data?.items);
            }
            ,fail:(error)=>{
                console.log(error);
            }
        });

    },[])
    return (
        <Layout>
            {loading && <Loading/>}
            <Flex gap={'10px'} textAlign={{base:'center',sm:'center',md:'start'}} padding={'10px'} alignItems={{base:'center',sm:'center',md:'start'}} flexDirection={{base:'column',sm:'column',md:'row'}} >
                <LazyLoadImage  src={podcastMetaData?.image} alt="podcast" width={'300px'}  rounded={'xl'} placeholderSrc={img}/>
                <Flex direction="column">
                    <Text fontSize={'2rem'}>{podcastMetaData?.title ? podcastMetaData.title :''}</Text>
                    <Text fontSize={'1rem'} color={'silver'}>by {podcastMetaData?.author ? podcastMetaData.author:'' }</Text>
                    <Text fontSize={'1rem'}> 
                        {podcastMetaData?.description ? podcastMetaData.description :''}
                    </Text>

                </Flex>
            </Flex>
            <Box textAlign={'start'} margin={'20px'}>
                <Text  fontSize={'1.4rem'}>Episodes</Text>
                <Flex flexDirection={'column'} gap={'10px'} marginBottom={'90px'}>
                    {
                      episodes && episodes.length > 0?  episodes.map((episode,index)=>{
                            return (
                                <PodcatsItem key={`${episode?.guid}_${index}`} image={episode?.image} title={episode?.title} date={episode?.datePublishedPretty} description={episode?.description} url={episode?.enclosureUrl} feedID={episode?.feedID} />
                            )
                        })
                        :
                        <Text>No Episodes Found</Text>
                    }
                    {/* <PodcatsItem title={''} date={''} description={''} feedID={''}  /> */}
                </Flex>
            </Box>

        </Layout>
    )
}

export const PodcatsItem = ({ title, image,date, description ,url ,feedID ,type='ep' }) => {
    const {audio,setAudio,setAudioName} = useAudio();
    const navigate = useNavigate();

    return(
        <Card.Root flexDirection={{base:'column',sm:'column',md:"row"}} alignItems={{base:'center',sm:'center',md:'start'}} overflow="hidden"  width={'100%'} cursor={'pointer'} onClick={()=>{
            if (type === 'ep') {
                setAudio(url);
                setAudioName(title);
            }
            else{
                navigate(`/pod4u/podcast/${feedID}`);
            }
        }} >
        <LazyLoadImage src={image?image:"https://placehold.co/150x150"} alt="podcast" width={'150px'} placeholderSrc={img}/>
        <Box flex={1}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Text fontSize={'0.9rem'} color={'silver'}>{date}</Text>
                <Card.Description >
{                                   description.substring(0,100).concat('...')
                         }
                </Card.Description>

            </Card.Body>
        </Box>
{       type === 'ep' && <FaPlayCircle style={{float:'right',margin:'auto 20px auto auto'}} size={'2rem'} />
}
    </Card.Root>
    )
}

export default Podcast;