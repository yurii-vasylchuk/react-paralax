import React from 'react';
import {extractPropsClassList} from "../../utils/utils";
import css from './ParalaxWrapper.module.scss'
import styled from "styled-components";

const WrapperDiv = styled.div`
    &:after {
        background-image: url(${props => props.image})
    }
`;

function ParalaxWrapper(props) {
    const externalClasses = extractPropsClassList(props.className);
    externalClasses.push(css.ParalaxWrapper);

    return (
        <WrapperDiv className={externalClasses.join(' ')} image={props.image}>
            {props.children}
        </WrapperDiv>
    );
}

export default ParalaxWrapper;
