import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
import { List, Drawer, Flex, Text, Box, Input, useMediaQuery,Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const NavbBar = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const [Open, setOpen] = useState(false);
    const [query,setQuery] = useState('');
    const navigate = useNavigate();

    const searchHandle = ()=>{
        navigate(`/pod4u/search/${query}`);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          navigate(`/pod4u/search/${query}`);
        }
      }

    // const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    return (
        <>

            <Flex alignItems={'center'} justifyContent={''} gap={'30px'}>

                <Flex alignItems={'center'} className='logo'>
                    {/* <Drawer.Root placement={'start'} open={Open} size={'xs'} onOpenChange={(e) => { setOpen(e.open) }} css={{ display: 'flex' }}>
                        <DrawerTrigger asChild>
                            <TiThMenu />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerCloseTrigger />
                            <DrawerHeader>
                                <DrawerTitle>
                                    Pod4u
                                </DrawerTitle>
                            </DrawerHeader>
                            <DrawerBody>
                                <List.Root listStyle={'none'}>
                                    <List.Item>
                                        <a href="/">Home</a>
                                    </List.Item>
                                    <List.Item>
                                        <a href="/">Episodes</a>
                                    </List.Item>
                                    <List.Item>
                                        <a href="/">About</a>
                                    </List.Item>

                                </List.Root>
          
                                <FontAwesomeIcon icon={faMagnifyingGlass} id='search-icon' />
                            </DrawerBody>
                        </DrawerContent>

                    </Drawer.Root> */}
                    <Text textDecoration={'none'} cursor={'pointer'} color={'white'} _hover={{color:'white'}} fontSize={'2.5rem'} onClick={()=>{navigate('/pod4u')}}>Pod4u</Text>
                </Flex>
                <Flex className="search" alignItems={'center'} width={'100%'}>
                    <Input type="text" placeholder="Search" rounded={'3xl'} value={query} onKeyDown={handleKeyDown} onChange={(e)=>{setQuery(e.target.value)}} />
                    <FontAwesomeIcon icon={faMagnifyingGlass}  style={{margin:'10px'}} onClick={searchHandle} />

                </Flex>
                    {/* <Link href="/">Home</Link> */}

                {/* <Flex className="links"> */}
                    {/* <Link href="/">Home</Link> */}
                    {/* <Link href="/">po</Link> */}
                    {/* <a href="/">About</a> */}
                {/* </Flex> */}
            </Flex>
        </>
    );
}

export default NavbBar;