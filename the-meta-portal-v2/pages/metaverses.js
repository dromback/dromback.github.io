import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../components/Header";

const Metaverses = () => {

    const decentraland = "https://i.ibb.co/mzy4srq/Decentraland.png"
    const sandbox = "https://i.ibb.co/mB2PwYS/The-Sandbox.png"
    const roblox = "https://i.ibb.co/6Nb7fCB/roblox.png"
    const axie = "https://i.ibb.co/RYYrnPL/axie.png"
    const fortnite = "https://i.ibb.co/S3jt7M7/Fortnite-Logo-edited.png"
    const minecraft = "https://i.ibb.co/S6tMBJW/minecraft.png"
    const bloktopia = "https://i.ibb.co/n72Gm7T/Blok-Icon.png"
    const highstreet = "https://i.ibb.co/xX7msCX/highstreet.png"
    const singularity6 = "https://i.ibb.co/fYYB6qW/Singularity6.jpg"
    const portals = "https://i.ibb.co/92hGDPJ/Portals.png"
    const upland = "https://i.ibb.co/pP9h9rS/Upland.png"
    const metahero = "https://i.ibb.co/p3LFKhy/metahero.png"
    const cryptovoxels = "https://i.ibb.co/D8YJdYq/cryptovoxels.png"
    const mobox = "https://i.ibb.co/BncbRZC/mobox.png"
    const nakamoto = "https://i.ibb.co/7yhWtnG/nakamoto.png"
    const vulcan = "https://i.ibb.co/k0v138B/VForged.png"
    const dvision = "https://i.ibb.co/5BjnPKV/Dvision.png"
    const ceek = "https://i.ibb.co/JnKj3Yh/CEEK.png"
    const alice = "https://i.ibb.co/zNkZhd4/Alice.png"
    const somnium = "https://i.ibb.co/jvByMS4/Somnium.png"
    const staratlas = "https://i.ibb.co/znMXKqD/staratlas.png"
    const ufo = "https://i.ibb.co/QKNqrsM/UFO.png"
    const ygg = "https://i.ibb.co/Sy5WbXr/ygg.jpg"
    const metamon = "https://i.ibb.co/f2XgVPX/metamon.png"
    const rfox = "https://i.ibb.co/yXGW64z/rfox.png"
    const solice = "https://i.ibb.co/8NyvpgJ/Solice.png"
    const wilder = "https://i.ibb.co/tqYJFpv/wilderworld.png"
    


    return (
        <><>
            <Flex direction="column" width="100vw" height="100vh" overflowX="hidden" overflowY="scroll">
                <Header />
                <Box flex="1"  bg="#242323"  px="44" py="20" >
                    <Text fontSize="60" color="white" mb="10">Popular Metaverses</Text>
                <SimpleGrid columns={2} spacingX='1px' spacingY='20px'>
                    
                    {/* Decentraland */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/decentraland'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={decentraland} alt="Decentraland"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                            <Text fontSize="19">Decentraland is a metaverse platform built on the Ethereum network. It allows its users to create, explore, and trade 
                                in their self-proclaimed first-ever virtual world owned by its users. Decentraland operates under its native token $MANA.</Text>
                            </Box>    
                        </Box>      
                    </Box>
                    
                    {/* The Sandbox */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/the-sandbox'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={sandbox} alt="The Sandbox"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="30px" color="white"  >
                                <Text fontSize="19">The Sandbox is described as a platform that allows creators to monetize voxel assets and gaming 
                                    experiences on the Ethereum blockchain. It calls notable celebrities such as Snoop Dogg, Metakovan (of Beeple NFT notoriety), 
                                    Deadmau5 , and brands like Nike, Adidas, and Atari its residents. The Sandbox native token is $SAND.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Axie Infinity */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/axie-infinity'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={axie} alt="Axie Infinity"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Axie Infinity is a play-to-earn game that runs on the Ethereum blockchain. It is filled with pets called &#34;Axies&#34;. 
                                    Axies can be battled, collected, and used to earn cryptocurrency. It uses the native token $AXS.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Roblox */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/roblox'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={roblox} alt="Roblox"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Roblox is a metaverse of millions of open source, community created immersive 3D experiences. 
                                It too has had superstar concerts with Lil Nas X drawing in more than 33 million viewers. It is accessible through any device.</Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Fortnite */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/fortnite'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={fortnite} alt="Fortnite"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="50px" color="white"  >
                                <Text fontSize="19">Fortnite started as a Battle Royale game-type but has since become much more. 
                                    The Party Worlds game-type acts as a metaverse and has even seen popular artists Marshmellow, 
                                    Ariana Grande, and Travis Scott perform concerts in front of more than 78 million in-game spectators (in Ariana&#39;s case).
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Minecraft */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/minecraft'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={minecraft} alt="Minecraft"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="70px" color="white"  >
                                <Text fontSize="19">Minecraft is a creative sandbox game that allows its users to create virtually limitless pixelated worlds. 
                                    It is one of the most popular metaverses of all time.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Bloktopia */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/bloktopia'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={bloktopia} alt="Bloktopia"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Bloktopia is a metaverse made of 21 floors (paying homage to the 21 million bitcoins).  
                                It is built on Unity and backed by the Polygon blockchain. Its native token is $BLOK.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Highstreet */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/highstreet'>
                            <Image boxShadow="2px 2px 2px black" src={highstreet} alt="Highstreet"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Both a metaverse and marketplace, Highstreet touts their Phygital concept where their products 
                                exist both in physical and virtual form. The native Highstreet currency is $HIGH.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Singularity6 */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/singularity6'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={singularity6} alt="Singularity6"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="75px" color="white"  >
                                <Text fontSize="19">Created by former Riot Games developers, Singularity 6 is a metaverse that&#39;s meant to provide 
                                immersive experiences that are more than &#34;just simple entertainment&#34;.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Portals */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/portals'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={portals} alt="portals"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="70px" color="white"  >
                                <Text fontSize="19">Portals is built on the Solana blockchain. It is a web-based virtual world that allows you to 
                                    design your own room with NFTs. Their native token is $Portal.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Upland */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/upland'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={upland} alt="Upland"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Upland is a play-to-earn metaverse that&#39;s mapped to the real world. Upland allows its users to buy, sell, and trade virtual 
                                properties that are mapped to real addressed. Users can earn both $UPX and U.S. dollars on the Upland platform.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Metahero */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/metahero'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={metahero} alt="Metahero"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Metahero is a metaverse that strives to bring the real world into the virtual world. Through a special scanning 
                                technology users can create their own 3D avatars and NFTs. It uses the $HERO token.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Cryptovoxels */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/cryptovoxels'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={cryptovoxels} alt="Cryptovoxels"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Cryptovoxels is a browser-based metaverse where users can buy land and build stores and art galleries in 
                                Origin City. It runs on the Ethereum blockchain. It has built-in tools, avatars, and chat.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* MOBOX */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/mobox'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={mobox} alt="Mobox"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">MOBOX runs in the MOMOverse. It is a play-to-earn game where users get rewarded for participating by 
                                creating NFTs and playing the game. Its native token is $MBOX.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Nakamoto */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/nakamoto-games'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={nakamoto} alt="Nakamoto"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="45px" color="white"  >
                                <Text fontSize="19">Nakamoto games was designed with the intention to help its users earn in the ecosystem. Its games are play-to-earn. It advertises weekly 
                                prize pools and rewards. It also allows developers to monetize their own games in its metaverse. Its native token is $NAKA, which runs on the Polygon blockchain.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Vulcan Forged */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/vulcan-forged'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={vulcan} alt="Vulcan Forged"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="65px" color="white"  >
                                <Text fontSize="19">The Vulcan Forged metaverse is built upon a play-to-earn ecosystem and NFT marketplace. 
                                Vulcan Forged runs on the Ethereum blockchain. $PYR is its native token.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Dvision Network */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/dvision-network'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={dvision} alt="Dvision Network"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">The Dvision Network is a blockchain-based NFT metaverse owned by players. Players can buy land, avatars, and other 
                                accessories to use throughout the metaverse. It seems to support the BSC, ETH, and soon Enjin tokens.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* CEEK */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/ceek'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={ceek} alt="CEEK"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="75px" color="white"  >
                                <Text fontSize="19">CEEK is meant to be the creator&#39;s metaverse. It was made to connect music artists, 
                                athletes, and other content creators directly to their fans. Its native token is $CEEK.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* My Neighbor Alice */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/my-neighbor-alice'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={alice} alt="My Neighbor Alice"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">My Neighbor Alice is an Ethereum blockchain-based metaverse. It is a multiplayer builder game where players can buy and 
                                own virtual islands and collect in-game items. Its native token is $ALICE.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Somnium Space */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/somnium-space'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={somnium} alt="Somnium Space"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="48px" color="white"  >
                                <Text fontSize="19">SomniumSpace is a cross-platform based metaverse that runs on the Ethereum blockchain using the Matic layer 2 solution. SomniumSpace 
                                represents that a user can &#34;Live Forever&#34; by automatically recording yourself on your own property for future AI analysis. Its native token is $CUBE.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Star Atlas */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/star-atlas'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={staratlas} alt="Star Atlas"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="65px" color="white"  >
                                <Text fontSize="19">StarAtlas is a futuristic metaverse built on the Solana blockchain that allows players to fly spaceships, battle other factions, and 
                                conquer new worlds. The game is built on the Unreal Engine. $ATLAS is its native token.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* UFO Gaming */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/ufo-gaming'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={ufo} alt="UFO Gaming"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">UFO Gaming is a futuristic play-to-earn metaverse based on multiple blockchains. Each of their games is meant to have 
                                its own governing planet. Its native token is $UFO.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Yield Guild Games */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/ygg'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={ygg} alt="Yield Guild Games"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="75px" color="white"  >
                                <Text fontSize="19">From the creators of Axie Infinity, Yield Guild Games (or YGG) is a play-to-earn gaming metaverse built on the 
                                Ethereum blockchain. $YGG is its native token.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Metamon */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/metamon'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={metamon} alt="Metamon"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="64px" color="white"  >
                                <Text fontSize="19">Metamon is a BSC blockchain-based play-to-earn game. Players get to control and collect Metamon. 
                                Almost all in-game items, including Metamon, are NFTs. Its native token is $RACA
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* RFox */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/rfox'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={rfox} alt="RFox"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="63px" color="white"  >
                                <Text fontSize="19">RFox is a multichain metaverse based on the Ethereum, BSC and WAX blockchains. RFOX focuses on immersive metaverse 
                                experiences focused on retail, media, gaming, and rewards. $RFOX is its native token.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Solice */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/solice'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={solice} alt="Solice"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="62px" color="white"  >
                                <Text fontSize="19">Solice is a metaverse run on the Solana blockchain. It allows users to create, collect, build, play, and monetize their experiences. 
                                They can earn tokens and other assets by completing in-game content. $SLC is its native token.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Wilder World */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box as="a" href='/metaverses/wilder-world'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={wilder} alt="Wilder World"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Wilder World is an immersive 5D metaverse built on the Ethereum blockchain using the Unreal Engine 5. 
                                Some of its NFT categories include Wheels (for racing), Kicks, Cribs, and Land . $WILD is its native token.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>


                </SimpleGrid>
                </Box>
                
            </Flex>
        </>
        
        </>
    );

  
}

export default Metaverses;

