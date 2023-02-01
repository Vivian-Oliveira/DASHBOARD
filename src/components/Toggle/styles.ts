import { Switch } from "@mui/material";
import { ReactSwitchProps } from "react-switch";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white}
`;

export const ToggleSelect = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    })) <ReactSwitchProps>`

    margin: 0 7px;
    `
;