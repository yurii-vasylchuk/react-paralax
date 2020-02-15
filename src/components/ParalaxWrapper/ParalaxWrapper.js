import React from 'react';
import styled from "styled-components";
import {extractPropsClassList} from "../../utils/utils";
import css from './ParalaxWrapper.module.scss'

const WrapperDiv = styled.div`
    &:after {
        background-image: url(${props => props.images.lg});
        
        @media screen and (max-width: 375px) {
            background-image: url(${props => props.images.xsm});
        }
        
        @media screen and (max-width: 768px) and (min-width: 376px) {
            background-image: url(${props => props.images.sm});
        }
        
        @media screen and (max-width: 1024px) and (min-width: 769px) {
            background-image: url(${props => props.images.md});
        }
    }
`;

function ParalaxWrapper(props) {
    const externalClasses = extractPropsClassList(props.className);
    externalClasses.push(css.ParalaxWrapper);

    return (
        <WrapperDiv className={externalClasses.join(' ')} images={props.images}>
            {props.children}
        </WrapperDiv>
    );
}

export default ParalaxWrapper;
