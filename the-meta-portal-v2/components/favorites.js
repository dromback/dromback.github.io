import { Button, Divider, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import CustomContainer from "./CustomContainer";
import FavoriteData from "./FavoriteData";



export default function Favorites(){

    const buttonBg = useColorModeValue('orange.400', 'orange.400')
    const {user, isAuthenticated, Moralis, account} = useMoralis();
    const [myFavorites, setMyFavorites] = useState();

    useEffect(() => {
      async function fetchFavorites() {
           // await Moralis.start({
           // serverUrl: "process.env.NEXT_PUBLIC_SERVER_URL",
           // appId: "process.env.NEXT_PUBLIC_APPID",
           // }); //if getting errors add this 
  
        try {
          const Favorites = await Moralis.Cloud.run("getFavorites", { addrs: account });

          console.log(Favorites)
  
          const filterdA = FavoriteData.filter(function (e) {
            return Favorites.indexOf(e.category) > -1;
          });
  
          setMyFavorites(filterdA);
          console.log(setMyFavorites)
          
        } catch (error) {
          console.error(error)
        }
      }
  
      fetchFavorites();
    }, [account]);
    
    

    const [visible, setVisible] = useState(false);
    const [selectedFavorite, setSelectedFavorite] = useState();

    return(
        <CustomContainer>
            <Text mb="6" fontSize="xl" fontWeight="bold">Favorites: </Text>
            <Divider mb="6"/>
            <Text mb="6" fontSize="xl" fontWeight="bold">{myFavorites} </Text>
            <Divider mb="6"/>
             
            
                <SimpleGrid columns={8} spacingX='2' spacingY='2'  >
                    
                    {myFavorites?.map((e) => {
                        return (
                            
                            // eslint-disable-next-line react/jsx-key
                            <Button onClick={() => {async () => {await Moralis.Cloud.run("updateFavorites", {
                                addrs: account,
                                newFav: selectedFavorite.category,
                            })

                            }}} bg={buttonBg}> {e.category} </Button>
                        )
                    })
                    }
            
                    <Button onClick={() => {setSelectedFavorite(e); setVisible(true);}} bg={buttonBg}>{e.category}</Button>
                    <Button bg={buttonBg}>{FavoriteData[1].category}</Button>
                        {/* If sports -> specify which one; Football, soccer, basketball, etc. */}
                    <Button bg={buttonBg}>Concerts</Button>
                    <Button bg={buttonBg}>Music</Button>
                        {/* Specify Music type or even artists */}
                    <Button bg={buttonBg}>Fashion</Button>
                    <Button bg={buttonBg}>Movies</Button>
                    <Button bg={buttonBg}>Art</Button>
                    <Button bg={buttonBg}>Technology</Button>
                    <Button bg={buttonBg}>Cars</Button>
                    <Button bg={buttonBg}>Shoes</Button>
                    <Button bg={buttonBg}>Nature</Button>
                    <Button bg={buttonBg}>Meditation</Button>
                    <Button bg={buttonBg}>Food</Button>
                    <Button bg={buttonBg}>Fitness</Button>
                    
                
                </SimpleGrid>
            
        </CustomContainer>

    )
}