import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import { Text, Button } from 'react-native';

const LoginScreen = ({authenticate, navigate}) => {
    async function verifyAuth() {
        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log(types);
    }

    async function handleAuth() {
        const isBio = await LocalAuthentication.isEnrolledAsync();
        console.log(isBio);

        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login com biometria',
            fallbackLabel: 'Biometria nao reconhecida'
        });
        authenticate(auth.success);
        const screen = auth.success ? "imagens" : "home";
        navigate(screen);
    }

    useEffect(() => {
        verifyAuth();
    });



    return (
        <>
            <Text>
                Por favor faça login para continuar.\n\n
            </Text>
            <Button
                title="Login"
                onPress={handleAuth}
            />
        </>
    );
}

export default LoginScreen;