import React from 'react';
import {extractPropsClassList} from "../../utils/utils";
import css from './TextBlock.module.scss'

function TextBlock(props) {
    const textBlockClasses = extractPropsClassList(props.className);
    textBlockClasses.push(css.TextBlock);


    return (
        <div className={textBlockClasses.join(' ')}>
            {props.children}
        </div>
    );
}

export default TextBlock;
