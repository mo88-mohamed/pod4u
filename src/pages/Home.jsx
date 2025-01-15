import { Box,Text } from "@chakra-ui/react";
import Content from "../components/Content";
import Slider from "../components/slider";
import Layout from "../layout/Layout";
import { useEffect,useState } from "react";
import useApi from "../hooks/useApi";
import { backendUrls } from "../hooks/useApi";
import Loading from "../components/loading";


const Home = () => {
    const {getData} =useApi();
    const [trending, setTrending] = useState([]);
    const url = backendUrls.trending;
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        getData({url:url,success:(data)=>{
            console.log(data);
            setTrending(data?.feeds);
            setLoading(false);
        },
        fail:(error)=>{
            console.log(error);
        }
    });

    },[])


    return (
        <Layout>
            {
                loading && <Loading/>
            }
            <Box>
            <Text fontSize='xl' fontWeight='bold' textAlign={'start'} marginLeft={'40px'}>Trending</Text>
                <Slider data={trending} />
            </Box>
            <Box>
                <Content></Content>
            </Box>
        </Layout>

    )
}

export default Home;