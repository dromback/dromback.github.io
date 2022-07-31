import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import Mvcol1 from "../components/mvBoxes/Mvcol1";
import Mvcol2 from "../components/mvBoxes/Mvcol2";


const Metaverses = () => {

    const tmp = "https://i.ibb.co/3CrVjjP/Original.png"
    const decentraland = "https://i.ibb.co/mzy4srq/Decentraland.png"
    const sandbox = "https://i.ibb.co/mB2PwYS/The-Sandbox.png"
    const otherside = "https://i.ibb.co/6Rb0NrM/otherside.png"
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
    const illuvium = "https://i.ibb.co/kGhMG1s/illuvium.png"
    const godsunchained = "https://i.ibb.co/fMDT1Yn/Gods-Unchained.png"
    
    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')

    return (
        <><>
            <title>The Meta Portal | Metaverses</title>
            <Flex direction="column" maxW="100vw" minH="100vh">
                
                <Box flex="1" bg={bg} px="7vw" py="11em">
                    <Text fontSize="2.5em" color={color} mb="10">Popular Metaverses</Text>
                
                    {/* The Meta Portal */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/the-meta-portal'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px 1px white" src={tmp} alt="The Meta Portal"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Our flagship metaverse. The Meta Portal is the entrance to the metaverse. Find metaverses that meet your preferences and interests.
                            Users are rewarded with portal tokens for posting and sharing useful content. The Meta Portal operates under its native token $PT.
                            </Text>
                        </Mvcol2>
                    </Flex>
                    
                    {/* Decentraland */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/decentraland'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={decentraland} alt="Decentraland"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Decentraland is a metaverse platform built on the Ethereum network. It allows its users to create, explore, and trade 
                                in their self-proclaimed first-ever virtual world owned by its users. Decentraland operates under its native token $MANA.
                            </Text>
                        </Mvcol2>
                    </Flex>
                    
                    {/* The Sandbox */}
                    <Flex mb="5">
                    <Mvcol1>
                        <Box as="a" href='/metaverses/the-sandbox'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={sandbox} alt="The Sandbox"/>
                        </Box>
                    </Mvcol1>
                    <Mvcol2>
                        <Text fontSize="1em">The Sandbox is described as a platform that allows creators to monetize voxel assets and gaming 
                            experiences on the Ethereum blockchain. It calls notable celebrities such as Snoop Dogg,  
                            Deadmau5, and brands like Nike, Adidas, and Atari its residents. The Sandbox native token is $SAND.
                        </Text>        
                    </Mvcol2>
                    </Flex>

                    {/* Otherside */}
                    <Flex mb="5">
                    <Mvcol1>
                        <Box as="a" href='/metaverses/otherside'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={otherside} alt="Otherside"/>
                        </Box>
                    </Mvcol1>
                    <Mvcol2>
                        <Text fontSize="1em">From the creators of Bored Ape Yacht Club, Otherside is one of the newest trending metaverses. 
                        The Otherside is a virtual world with 5 land types that are purchasable as Otherdeeds. These lands have powerful artifacts
                        and even rare creatures called Kodas. $APE is its native token.
                        </Text>        
                    </Mvcol2>
                    </Flex>

                    {/* Axie Infinity */}
                    <Flex mb="5">
                    <Mvcol1>
                        <Box as="a" href='/metaverses/axie-infinity'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={axie} alt="Axie Infinity"/>
                        </Box>
                    </Mvcol1>
                    <Mvcol2>
                                <Text fontSize="1em">Axie Infinity is a play-to-earn game that runs on the Ethereum blockchain. It is filled with pets called &#34;Axies&#34;. 
                                    Axies can be battled, collected, and used to earn cryptocurrency. It uses the native token $AXS.
                                </Text>    
                    </Mvcol2>
                    </Flex>

                    {/* Roblox */}
                    <Flex mb="5">
                    <Mvcol1>
                        <Box as="a" href='/metaverses/roblox'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={roblox} alt="Roblox"/>
                        </Box>
                    </Mvcol1>
                    <Mvcol2>
                        <Text fontSize="1em">Roblox is a metaverse of millions of open source, community created immersive 3D experiences. 
                        It too has had superstar concerts with Lil Nas X drawing in more than 33 million viewers. It is accessible through any device.</Text>    
                    </Mvcol2>
                    </Flex>

                    {/* Fortnite */}
                    <Flex mb="5">
                    <Mvcol1>
                        <Box as="a" href='/metaverses/fortnite'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={fortnite} alt="Fortnite"/>
                        </Box>
                    </Mvcol1>
                    <Mvcol2>
                        <Text fontSize="1em">Fortnite started as a Battle Royale game-type but has since become much more. 
                            The Party Worlds game-type acts as a metaverse and has even seen popular artists Marshmellow, 
                            Ariana Grande, and Travis Scott perform concerts in front of more than 78 million in-game spectators (in Ariana&#39;s case).
                        </Text> 
                    </Mvcol2>
                    </Flex>

                    {/* Minecraft */}
                    <Flex mb="5">
                    <Mvcol1>
                        <Box as="a" href='/metaverses/minecraft'>
                            <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={minecraft} alt="Minecraft"/>
                        </Box>
                    </Mvcol1>
                    <Mvcol2>
                        <Text fontSize="1em">Minecraft is a creative sandbox game that allows its users to create virtually limitless pixelated worlds. 
                            It is one of the most popular metaverses of all time.
                        </Text>  
                    </Mvcol2>
                    </Flex>

                    {/* Bloktopia */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/bloktopia'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={bloktopia} alt="Bloktopia"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Bloktopia is a metaverse made of 21 floors (paying homage to the 21 million bitcoins).  
                            It is built on Unity and backed by the Polygon blockchain. Its native token is $BLOK.
                            </Text>  
                        </Mvcol2>
                    </Flex>

                    {/* Highstreet */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/highstreet'>
                                <Image boxShadow="2px 2px 2px black" src={highstreet} alt="Highstreet"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Both a metaverse and marketplace, Highstreet touts their Phygital concept where their products 
                            exist both in physical and virtual form. The native Highstreet currency is $HIGH.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* Singularity6 */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/singularity6'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={singularity6} alt="Singularity6"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Created by former Riot Games developers, Singularity 6 is a metaverse that&#39;s meant to provide 
                            immersive experiences that are more than &#34;just simple entertainment&#34;.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* Portals */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/portals'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={portals} alt="portals"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Portals is built on the Solana blockchain. It is a web-based virtual world that allows you to 
                                design your own room with NFTs. Their native token is $Portal.
                            </Text>    
                        </Mvcol2>
                    </Flex>

                    {/* Upland */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/upland'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={upland} alt="Upland"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Upland is a play-to-earn metaverse that&#39;s mapped to the real world. Upland allows its users to buy, sell, and trade virtual 
                            properties that are mapped to real addressed. Users can earn both $UPX and U.S. dollars on the Upland platform.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* Metahero */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/metahero'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={metahero} alt="Metahero"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Metahero is a metaverse that strives to bring the real world into the virtual world. Through a special scanning 
                            technology users can create their own 3D avatars and NFTs. It uses the $HERO token.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* Cryptovoxels */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/cryptovoxels'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={cryptovoxels} alt="Cryptovoxels"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Cryptovoxels is a browser-based metaverse where users can buy land and build stores and art galleries in 
                            Origin City. It runs on the Ethereum blockchain. It has built-in tools, avatars, and chat.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* MOBOX */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/mobox'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={mobox} alt="Mobox"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">MOBOX runs in the MOMOverse. It is a play-to-earn game where users get rewarded for participating by 
                            creating NFTs and playing the game. Its native token is $MBOX.
                            </Text>  
                        </Mvcol2>
                    </Flex>

                    {/* Nakamoto */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/nakamoto-games'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={nakamoto} alt="Nakamoto"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Nakamoto games was designed with the intention to help its users earn in the ecosystem. Its games are play-to-earn. It advertises weekly 
                            prize pools and rewards. It also allows developers to monetize their own games in its metaverse. Its native token is $NAKA, which runs on the Polygon blockchain.
                            </Text> 
                        </Mvcol2>
                    </Flex>

                    {/* Vulcan Forged */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/vulcan-forged'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={vulcan} alt="Vulcan Forged"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">The Vulcan Forged metaverse is built upon a play-to-earn ecosystem and NFT marketplace. 
                            Vulcan Forged runs on the Ethereum blockchain. $PYR is its native token.
                            </Text>  
                        </Mvcol2>
                    </Flex>

                    {/* Dvision Network */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/dvision-network'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={dvision} alt="Dvision Network"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">The Dvision Network is a blockchain-based NFT metaverse owned by players. Players can buy land, avatars, and other 
                            accessories to use throughout the metaverse. It seems to support the BSC, ETH, and soon Enjin tokens.
                            </Text>  
                        </Mvcol2>
                    </Flex>

                    {/* CEEK */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/ceek'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={ceek} alt="CEEK"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">CEEK is meant to be the creator&#39;s metaverse. It was made to connect music artists, 
                            athletes, and other content creators directly to their fans. Its native token is $CEEK.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* My Neighbor Alice */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/my-neighbor-alice'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={alice} alt="My Neighbor Alice"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">My Neighbor Alice is an Ethereum blockchain-based metaverse. It is a multiplayer builder game where players can buy and 
                            own virtual islands and collect in-game items. Its native token is $ALICE.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* Somnium Space */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/somnium-space'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={somnium} alt="Somnium Space"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">SomniumSpace is a cross-platform based metaverse that runs on the Ethereum blockchain using the Matic layer 2 solution. SomniumSpace 
                            represents that a user can &#34;Live Forever&#34; by automatically recording yourself on your own property for future AI analysis. Its native token is $CUBE.
                            </Text>  
                        </Mvcol2>
                    </Flex>

                    {/* Star Atlas */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/star-atlas'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={staratlas} alt="Star Atlas"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">StarAtlas is a futuristic metaverse built on the Solana blockchain that allows players to fly spaceships, battle other factions, and 
                            conquer new worlds. The game is built on the Unreal Engine. $ATLAS is its native token.
                            </Text>  
                        </Mvcol2>
                    </Flex>

                    {/* UFO Gaming */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/ufo-gaming'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={ufo} alt="UFO Gaming"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">UFO Gaming is a futuristic play-to-earn metaverse based on multiple blockchains. Each of their games is meant to have 
                            its own governing planet. Its native token is $UFO.
                            </Text>  
                        </Mvcol2>
                    </Flex>

                    {/* Yield Guild Games */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/ygg'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={ygg} alt="Yield Guild Games"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">From the creators of Axie Infinity, Yield Guild Games (or YGG) is a play-to-earn gaming metaverse built on the 
                            Ethereum blockchain. $YGG is its native token.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* Metamon */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/metamon'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={metamon} alt="Metamon"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Metamon is a BSC blockchain-based play-to-earn game. Players get to control and collect Metamon. 
                            Almost all in-game items, including Metamon, are NFTs. Its native token is $RACA
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* RFox */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/rfox'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={rfox} alt="RFox"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">RFox is a multichain metaverse based on the Ethereum, BSC and WAX blockchains. RFOX focuses on immersive metaverse 
                            experiences focused on retail, media, gaming, and rewards. $RFOX is its native token.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* Solice */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/solice'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={solice} alt="Solice"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Solice is a metaverse run on the Solana blockchain. It allows users to create, collect, build, play, and monetize their experiences. 
                            They can earn tokens and other assets by completing in-game content. $SLC is its native token.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* Wilder World */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/wilder-world'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={wilder} alt="Wilder World"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Wilder World is an immersive 5D metaverse built on the Ethereum blockchain using the Unreal Engine 5. 
                            Some of its NFT categories include Wheels (for racing), Kicks, Cribs, and Land. $WILD is its native token.
                            </Text>  
                        </Mvcol2>
                    </Flex>

                    {/* Illuvium */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/illuvium'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={illuvium} alt="Illuvium"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">An open-world RPG adventure game built on the Ethereum Blockchain. 
                            Users draft teams to start with and then collect even more to develop and battle with. $ILV is its native token.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                    {/* Gods Unchained */}
                    <Flex mb="5">
                        <Mvcol1>
                            <Box as="a" href='/metaverses/gods-unchained'>
                                <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={godsunchained} alt="Gods Unchained"/>
                            </Box>
                        </Mvcol1>
                        <Mvcol2>
                            <Text fontSize="1em">Led by former Game Director of Magic: The Gathering Arena, Gods Unchained is a free-to-play, play to earn trading card game 
                                that gives the ownership to the players. $GODS is its native ERC-20 token.
                            </Text>   
                        </Mvcol2>
                    </Flex>

                
                </Box>
                
            </Flex>
        </>
        
        </>
    );

  
}

export default Metaverses;

