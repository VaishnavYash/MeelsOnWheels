import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigation";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
    const { isAuth } = useContext(AuthenticationContext);
    return (
        <NavigationContainer>
            {isAuth ? <AppNavigator /> : <AccountNavigator />}
        </NavigationContainer>
    )
}