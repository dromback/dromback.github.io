import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../components/Header";

const Metaverses = () => {

    const decentraland = "https://static.wixstatic.com/media/3e1ac7_362d404f10954cbbb6124671c65152f4~mv2.png/v1/fill/w_235,h_131,al_c,usm_0.66_1.00_0.01,enc_auto/Decentraland.png"
    const sandbox = "https://static.wixstatic.com/media/3e1ac7_a31d65c51cc74ccfb78665351a5ba3ec~mv2.png/v1/fill/w_264,h_131,al_c,usm_0.66_1.00_0.01,enc_auto/The%20Sandbox.png"
    const roblox = "https://static.wixstatic.com/media/3e1ac7_62d601dd5d5a4fad950bcca1d3696645~mv2.png/v1/fill/w_219,h_67,al_c,usm_0.66_1.00_0.01,enc_auto/roblox.png"
    const axie = "https://static.wixstatic.com/media/3e1ac7_0ef20537ccaa4aa1a135bbee471f6cab~mv2.png/v1/fill/w_200,h_99,al_c,lg_1,enc_auto/axie.png"
    const fortnite = "https://static.wixstatic.com/media/3e1ac7_ce9c6d577eda44bf9007b6a983c244dd~mv2.jpg/v1/fill/w_264,h_149,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Fortnite-Logo_edited.jpg"
    const minecraft = "https://static.wixstatic.com/media/3e1ac7_fe7378c976d4491487829be16f0582b7~mv2.jpg/v1/crop/x_0,y_0,w_183,h_129/fill/w_213,h_149,al_c,lg_1,q_80,enc_auto/minecraft_jfif.jpg"
    const bloktopia = "https://static.wixstatic.com/media/3e1ac7_4cb4b4b896144c32be7360393224931b~mv2.png/v1/fill/w_257,h_53,al_c,usm_0.66_1.00_0.01,enc_auto/Blok%20Icon.png"
    const highstreet = "https://static.wixstatic.com/media/3e1ac7_65e3cf371f2b473e89697186de447ed1~mv2.png/v1/fill/w_222,h_125,al_c,usm_0.66_1.00_0.01,enc_auto/highstreet.png"
    const singularity6 = "https://static.wixstatic.com/media/3e1ac7_8324eeb4e4de4dd387a4a2db9d3e96a5~mv2.jpg/v1/fill/w_239,h_57,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Singularity6.jpg"
    const portals = "https://static.wixstatic.com/media/3e1ac7_0b43a6297f2a41fdb60ab1f7136bd986~mv2.png/v1/fill/w_160,h_43,al_c,lg_1,enc_auto/Portals.png"
    const upland = "https://static.wixstatic.com/media/3e1ac7_e4eae41f7be1480cba3a22e1c4499585~mv2.png/v1/fill/w_201,h_56,al_c,enc_auto/Upland.png"
    const metahero = "https://static.wixstatic.com/media/3e1ac7_153ea147d910428f9800f3b5f9a16522~mv2.png/v1/fill/w_219,h_67,al_c,enc_auto/metahero.png"
    const cryptovoxels = "https://static.wixstatic.com/media/3e1ac7_107ea8d905df401fac0cb1cfada0c44e~mv2.png/v1/fill/w_266,h_97,al_c,usm_0.66_1.00_0.01,enc_auto/cryptovoxels.png"
    const mobox = "https://static.wixstatic.com/media/3e1ac7_f107e56e20294533a01c3f7d18ab9d6b~mv2.png/v1/fill/w_176,h_52,al_c,enc_auto/mobox.png"
    const nakamoto = "https://static.wixstatic.com/media/3e1ac7_092a89fa046a406db65f2023a5b40f40~mv2.png/v1/fill/w_249,h_73,al_c,usm_0.66_1.00_0.01,enc_auto/nakamoto.png"
    const vulcan = "https://static.wixstatic.com/media/3e1ac7_817cfe000bc44d71b9e95b8f9d529f87~mv2.png/v1/fill/w_198,h_44,al_c,enc_auto/VForged.png"
    const dvision = "https://static.wixstatic.com/media/3e1ac7_f496435df9c94f87a3a7764c984f0383~mv2.png/v1/fill/w_143,h_63,al_c,enc_auto/Dvision.png"
    const ceek = "https://static.wixstatic.com/media/3e1ac7_d33f7efa97834c9d8ba29238f559c9c0~mv2.png/v1/fill/w_79,h_74,al_c,enc_auto/CEEK.png"
    const alice = "https://static.wixstatic.com/media/3e1ac7_d18f40af251d4cb09d22bbdde5db3130~mv2.png/v1/fill/w_188,h_139,al_c,enc_auto/Alice.png"
    const somnium = "https://static.wixstatic.com/media/3e1ac7_716ebc1d42f942fab8a6cfd0b42e7917~mv2.png/v1/fill/w_171,h_57,al_c,enc_auto/Somnium.png"
    const staratlas = "https://static.wixstatic.com/media/3e1ac7_ae474c9e7e414dc18a82ae25b50bc1a1~mv2.png/v1/fill/w_231,h_38,al_c,enc_auto/staratlas.png"
    const ufo = "https://static.wixstatic.com/media/3e1ac7_0b01ded9ce23418ca5706083d34a6616~mv2.png/v1/fill/w_128,h_77,al_c,lg_1,enc_auto/UFO.png"
    const ygg = "https://static.wixstatic.com/media/3e1ac7_e8dbaf44ce384ef1a3c4708b3f461f79~mv2.jpg/v1/fill/w_110,h_110,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ygg.jpg"
    const metamon = "https://static.wixstatic.com/media/3e1ac7_0d20caf57f2c426b839c570d14a80f42~mv2.png/v1/fill/w_215,h_65,al_c,usm_0.66_1.00_0.01,enc_auto/metamon.png"
    const rfox = "https://static.wixstatic.com/media/3e1ac7_586a757fb0b14773b0ba4aaffea82113~mv2.png/v1/fill/w_177,h_65,al_c,lg_1,enc_auto/rfox.png"
    const solice = "https://static.wixstatic.com/media/3e1ac7_e0e2035c3d4441549dd4c63d37c2cb1e~mv2.png/v1/fill/w_200,h_90,al_c,enc_auto/Solice.png"
    const wilder = "https://static.wixstatic.com/media/3e1ac7_4bfc27f5afb348c298099adc16e61a07~mv2.png/v1/fill/w_75,h_65,al_c,lg_1,enc_auto/wilderworld.png"
    

    return (
        <><>
            <Flex direction="column" width="100vw" height="100vh" overflowX="hidden" overflowY="scroll">
                <Header />
                <Box flex="1"  bg="#242323"  px="44" py="20" >
                    <Text fontSize="60" color="white" mb="10">Popular Metaverses</Text>
                <SimpleGrid columns={2} spacingX='1px' spacingY='20px'>
                    
                    {/* Decentraland */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/decentraland'>
                            <Image ml="6" position="relative" top="60px" left="59px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={decentraland} alt="Decentraland"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/the-sandbox'>
                            <Image ml="6" position="relative" top="60px" left="48px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={sandbox} alt="The Sandbox"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/axie-infinity'>
                            <Image ml="6" position="relative" top="75px" left="72px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={axie} alt="Axie Infinity"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Axie Infinity is a play-to-earn game that runs on the Ethereum blockchain. It is filled with pets called "Axies". 
                                    Axies can be battled, collected, and used to earn cryptocurrency. It uses the native token $AXS.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Roblox */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/roblox'>
                            <Image ml="6" position="relative" top="90px" left="70px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={roblox} alt="Roblox"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/fortnite'>
                            <Image ml="6" position="relative" top="55px" left="45px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={fortnite} alt="Fortnite"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="50px" color="white"  >
                                <Text fontSize="19">Fortnite started as a Battle Royale game-type but has since become much more. 
                                    The Party Worlds game-type acts as a metaverse and has even seen popular artists Marshmellow, 
                                    Ariana Grande, and Travis Scott perform concerts in front of more than 78 million in-game spectators (in Ariana's case).
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Minecraft */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/minecraft'>
                            <Image ml="6" position="relative" top="50px" left="59px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={minecraft} alt="Minecraft"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/bloktopia'>
                            <Image ml="6" position="relative" top="100px" left="50px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={bloktopia} alt="Bloktopia"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/highstreet'>
                            <Image ml="6" position="relative" top="60px" left="64px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={highstreet} alt="Highstreet"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/singularity6'>
                            <Image ml="6" position="relative" top="95px" left="59px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={singularity6} alt="Singularity6"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="75px" color="white"  >
                                <Text fontSize="19">Created by former Riot Games developers, Singularity 6 is a metaverse that's meant to provide 
                                immersive experiences that are more than "just simple entertainment".
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Portals */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/portals'>
                            <Image ml="6" position="relative" top="100px" left="90px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={portals} alt="portals"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/upland'>
                            <Image ml="6" position="relative" top="95px" left="72px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={upland} alt="Upland"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">Upland is a play-to-earn metaverse that's mapped to the real world. Upland allows its users to buy, sell, and trade virtual 
                                properties that are mapped to real addressed. Users can earn both $UPX and U.S. dollars on the Upland platform.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Metahero */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/metahero'>
                            <Image ml="6" position="relative" top="90px" left="65px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={metahero} alt="Metahero"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/cryptovoxels'>
                            <Image ml="6" position="relative" top="75px" left="46px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={cryptovoxels} alt="Cryptovoxels"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/mobox'>
                            <Image ml="6" position="relative" top="100px" left="90px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={mobox} alt="Mobox"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/nakamoto-games'>
                            <Image ml="6" position="relative" top="85px" left="53px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={nakamoto} alt="Nakamoto"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/vulcan-forged'>
                            <Image ml="6" position="relative" top="100px" left="70px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={vulcan} alt="Vulcan Forged"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="65px" color="white"  >
                                <Text fontSize="19">The VulcanForged metaverse is built upon a play-to-earn ecosystem and NFT marketplace. 
                                VulcanForged runs on the Ethereum blockchain. $PYR is its native token.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Dvision Network */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/dvision-network'>
                            <Image ml="6" position="relative" top="95px" left="100px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={dvision} alt="Dvision Network"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/ceek'>
                            <Image ml="6" position="relative" top="87px" left="135px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={ceek} alt="CEEK"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="75px" color="white"  >
                                <Text fontSize="19">CEEK is meant to be the creator's metaverse. It was made to connect music artists, 
                                athletes, and other content creators directly to their fans. Its native token is $CEEK.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* My Neighbor Alice */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/my-neighbor-alice'>
                            <Image ml="6" position="relative" top="57px" left="85px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={alice} alt="My Neighbor Alice"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/somnium-space'>
                            <Image ml="6" position="relative" top="97px" left="90px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={somnium} alt="Somnium Space"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="48px" color="white"  >
                                <Text fontSize="19">SomniumSpace is a cross-platform based metaverse that runs on the Ethereum blockchain using the Matic layer 2 solution. SomniumSpace 
                                represents that a user can "Live Forever" by automatically recording yourself on your own property for future AI analysis. Its native token is $CUBE.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Star Atlas */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/star-atlas'>
                            <Image ml="6" position="relative" top="105px" left="60px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={staratlas} alt="Star Atlas"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/ufo-gaming'>
                            <Image ml="6" position="relative" top="85px" left="110px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={ufo} alt="UFO Gaming"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/ygg'>
                            <Image ml="6" position="relative" top="74px" left="121px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={ygg} alt="Yield Guild Games"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/metamon'>
                            <Image ml="6" position="relative" top="96px" left="68px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={metamon} alt="Metamon"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/rfox'>
                            <Image ml="6" position="relative" top="94px" left="85px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={rfox} alt="RFox"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/solice'>
                            <Image ml="6" position="relative" top="81px" left="77px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={solice} alt="Solice"/>
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
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/wilder-world'>
                            <Image ml="6" position="relative" top="92px" left="135px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={wilder} alt="Wilder World"/>
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

