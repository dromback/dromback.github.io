import React, { useState } from "react";
import { Button, Flex, Icon, Input, Text, useColorModeValue } from "@chakra-ui/react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { BsDot } from "react-icons/bs";
import { authModalState, ModalView } from "../../../atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp";
import { useSetRecoilState } from "recoil";

type ResetPasswordProps = {
    toggleView: (view: ModalView) => void;
};

const ResetPassword: React.FC<ResetPasswordProps> = ({ toggleView }) => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await sendPasswordResetEmail(email);
        setSuccess(true);
    };

    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')

    return (
        <Flex direction="column" alignItems="center" width="100%">

            {success ? (
                <Text mb={4}>Check your email.</Text>
            ) : (
                <>
                    <Text fontSize="sm" textAlign="center" mb={2} color={color}>
                        Enter the email associated with your account and we will send you a
                        reset link
                    </Text>
                    <form onSubmit={onSubmit} style={{ width: "100%" }}>
                        <Input
                            required
                            name="email"
                            color={color}
                            placeholder="email"
                            type="email"
                            mb={2}
                            onChange={(event) => setEmail(event.target.value)}
                            fontSize="10pt"
                            _placeholder={{ color: color }}
                            _hover={{
                                bg: bg,
                                border: "1px solid",
                                borderColor: "orange.500",
                            }}
                            _focus={{
                                outline: "none",
                                bg: bg,
                                border: "1px solid",
                                borderColor: "orange.500",
                            }}
                            bg={bg}
                        />
                        <Text textAlign="center" fontSize="10pt" color="red">
                            {error?.message}
                        </Text>
                        <Button
                            width="100%"
                            height="36px"
                            mb={2}
                            mt={2}
                            type="submit"
                            isLoading={sending}
                            color={color}
                        >
                            Reset Password
                        </Button>
                    </form>
                </>
            )}
            <Flex
                alignItems="center"
                fontSize="9pt"
                color="orange.500"
                fontWeight={700}
                cursor="pointer"
            >
                <Text
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "login",
                        }))
                    }
                >
                    LOGIN
                </Text>
                <Icon as={BsDot} />
                <Text
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "signup",
                        }))
                    }
                >
                    SIGN UP
                </Text>
            </Flex>
        </Flex>
    );
};
export default ResetPassword;