import { Button, Flex, Input, Stack, Textarea, useColorModeValue } from '@chakra-ui/react';
import React, { ReactHTML } from 'react';

type TextInputsProps = {
    textInputs: {
        title: string;
        body: string;
    };
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleCreatePost: () => void;
    loading: boolean;
};

const TextInputs:React.FC<TextInputsProps> = ({ textInputs, onChange, handleCreatePost, loading,}) => {
    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')
    return (
        <Stack spacing='3' w='100%'>
            <Input 
                required
                name='title' 
                value={textInputs.title}
                onChange={onChange}
                fontSize='10pt'
                borderRadius='4'
                placeholder='Title'
                _placeholder={{color: color}}
                _focus={{ outline: 'none', bg: bg, border: '1px solid', borderColor: 'black', }}
            />
            <Textarea 
                required
                name='body'
                value={textInputs.body}
                onChange={onChange}
                h='100px'
                fontSize='10pt'
                borderRadius='4'
                placeholder='Text'
                _placeholder={{color: color}}
                _focus={{ outline: 'none', bg: bg, border: '1px solid', borderColor: 'black', }}
            />
            <Flex justify='flex-end'>
                <Button h='34px' p='0px 30px' disabled={!textInputs.title} 
                    isLoading={loading} 
                    onClick={handleCreatePost}
                >
                    Post
                </Button>
            </Flex>
        </Stack>
    )
}
export default TextInputs;