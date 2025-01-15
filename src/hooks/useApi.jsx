import sha1 from "js-sha1";

export const backendUrls = {
    search: 'https://api.podcastindex.org/api/1.0/search/byterm?q=',
    trending: 'https://api.podcastindex.org/api/1.0/podcasts/trending?max=10',
    recentPodcasts :'https://api.podcastindex.org/api/1.0/recent/feeds?max=15&lang=en,ja&pretty',
    podcastData : 'https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id=',
    podcastEpisodes : 'https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=' 

}
const useApi = () =>{
    const key = 'CXTZFN2U9ZVQ3LNRCHMK';
    const secret = 'xM9Txb3C39pLVzJA3W7QQtcwSD28x5g74HLdygGk';
    const time = Math.floor(Date.now() / 1000);
    const hash = sha1(`${key}${secret}${time}`);



    const headers = {
        'User-Agent': 'Pod4u App/1.0.0',
        'X-Auth-Date': time,
        'X-Auth-Key': key,
        'Authorization': hash
    }

    const getData = ({url,success,fail}) =>{

        fetch(url,{
            method:'GET',
            headers:headers
        }).then(response => response.json())
        .then(data => {
            success(data);
            
        }
        ).catch(err=>{
            fail(err);
        });

    }


return {getData}
}

export default useApi;