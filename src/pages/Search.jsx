import Layout from "../layout/Layout";
import { Box, Flex, Text } from "@chakra-ui/react";
import { PodcatsItem } from "./Podcast";
import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { backendUrls } from "../hooks/useApi";
import { useLocation } from "react-router-dom";
import Loading from "../components/loading";
const Search = () => {
    const [results , setResults] = useState([]);
    const {getData} = useApi();
    const url = backendUrls.search;
    const location =useLocation()
    const query = location.pathname.split('/')[2];
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        // const apiUrl = `https://api.podcastindex.org/api/1.0/search/byterm?q=${query}`
        getData({url:url+query,success:(data)=>{
            console.log(data);
            setResults(data?.feeds);
            setLoading(false);
        }
        ,fail:(error)=>{
            console.log(error);
            setLoading(false);
        }
    });

    },[query])
    console.log(query)
    return (
        <Layout>
            {
                loading && <Loading/>
            }
            <Box padding={'20px'} marginBottom={'80px'}>
            <Text fontSize={'1.5rem'} textAlign={'start'} >Search Results for {decodeURI(query)}</Text>
            <Flex gap={'10px'} flexDirection={'column'} >
            {
                results.map((result,index)=>{
                    return (
                        <PodcatsItem key={`${result?.guid}_${index}`} title={result?.title} image={result?.image} date={result?.datePublishedPretty} description={result?.description} url={result?.enclosureUrl} type="pod" feedID={result?.id} />
                        )
                })

            }
            </Flex>
            </Box>
        </Layout>
    );
}
export default Search;