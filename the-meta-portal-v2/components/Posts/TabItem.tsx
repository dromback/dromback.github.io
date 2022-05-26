import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { TabItem } from './NewPostForm';

type TabItemProps = {
    item: TabItem;
    selected: boolean;
    setSelectedTab: (value: string) => void;
};

const TabItem:React.FC<TabItemProps> = ({ item, selected, setSelectedTab }) => {

    
    const color = useColorModeValue('black', 'white')
    
    return (
        <Flex justify='center' align='center' flexGrow='1' p='14px 0px' cursor='pointer' _hover={{bg: 'orange.200'}}
        color={selected ? 'orange.500' : 'gray.500'} borderWidth={selected ? '0px 1px 2px 0px' : '0px 1px 1px 0px'}
        borderBottomColor={selected ? 'orange.500' : 'gray.200'} borderRightColor={selected ? 'orange.500' : 'gray.500'} fontWeight='700'
        onClick={() => setSelectedTab(item.title)}
        >
            <Flex align='center' h='20px' mr='2'>
                <Icon as={item.icon} />
            </Flex>
            <Text fontSize='10pt'>{item.title}</Text>
        </Flex>
    )
}
export default TabItem;