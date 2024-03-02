import React, { useContext, useState } from "react";
import { AccountCover, AccountBackground, AuthInput, AuthButton, AccountContainer, ErrorContainer, Title } from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/typo.components";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals on Wheels</Title>
            <AccountContainer >
                <AuthInput 
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={text => setEmail(text)}
                    />
                <AuthInput 
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={text => setPassword(text)}
                    />
                
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error"> {error} </Text>
                    </ErrorContainer>
                )}
                
                <AuthButton
                    icon = "lock-open-outline"
                    mode = "contained"
                    onPress={() => onLogin(email, password)}
                    >
                    Login
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    )
}