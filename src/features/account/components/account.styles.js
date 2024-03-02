import { colors } from  "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/typo.components";
import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg"),
})`
    flex: 1;
    background-color: #ddd;
    align-items: center;
    justifyContent: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    backgound-color: rgba(255,255,255,0.3);
`;

export const AccountContainer = styled.View`
    backgound-color: rgba(255,255,255,0.8);
    padding: ${(props) => props.theme.space.xxl};
    margin-top: ${(props) => props.theme.lrg};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
    paddingHorizontal: ${(props) => props.theme.space.lrg};
    paddingVerical: ${(props) => props.theme.space.md};
    margin-vertical: ${(props) => props.theme.space.md};
`;

export const AuthInput = styled(TextInput)`
    margin-vertical: ${(props) => props.theme.space.md};
    width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;