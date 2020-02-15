import {LoremIpsum} from "lorem-ipsum";
import React from 'react';
import './App.scss';
import paralaxImage1 from './assets/1.jpg'
import paralaxImage2 from './assets/2.jpg'
import paralaxImage3 from './assets/3.jpg'
import ParalaxWrapper from "./components/ParalaxWrapper/ParalaxWrapper";
import TextBlock from "./components/TextBlock/TextBlock";
import {capitalize} from "./utils/utils";

// region constants

const primaryParalaxClasses = ['App_paralax__primary'];
const secondaryParalaxClasses = ['App_paralax__secondary'];

const primaryTextBlockClasses = ['Text-block__primary'];
const secondaryTextBlockClasses = ['Text-block__secondary'];

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 10,
        min: 6
    },
    wordsPerSentence: {
        max: 16,
        min: 6
    }
});

lorem.generateWords(1);
lorem.generateSentences(5);


const paralaxBlockTitleWordsCount = Math.floor(Math.random() * 2 + 2);
const textBlockTitleWordsCount = Math.floor(Math.random() * 2 + 2);
const textBlockTextSentencesCount = Math.floor(Math.random() * 4 + 6);

const paralaxBlock1Title = capitalize(lorem.generateWords(paralaxBlockTitleWordsCount));
const paralaxBlock2Title = capitalize(lorem.generateWords(paralaxBlockTitleWordsCount));
const paralaxBlock3Title = capitalize(lorem.generateWords(paralaxBlockTitleWordsCount));
const paralaxBlock4Title = capitalize(lorem.generateWords(paralaxBlockTitleWordsCount));

const textBlock1Title = capitalize(lorem.generateWords(textBlockTitleWordsCount));
const textBlock2Title = capitalize(lorem.generateWords(textBlockTitleWordsCount));
const textBlock3Title = capitalize(lorem.generateWords(textBlockTitleWordsCount));

const textBlock1Text = lorem.generateSentences(textBlockTextSentencesCount);
const textBlock2Text = lorem.generateSentences(textBlockTextSentencesCount);
const textBlock3Text = lorem.generateSentences(textBlockTextSentencesCount);

// endregion

function App() {
    return (
        <div className="App">
            <ParalaxWrapper image={paralaxImage1} className={primaryParalaxClasses}>
                <h1 className="App_paralax-title">{paralaxBlock1Title}</h1>
            </ParalaxWrapper>

            <TextBlock className={primaryTextBlockClasses}>
                <h1>{textBlock1Title}</h1>
                <p>{textBlock1Text}</p>
            </TextBlock>

            <ParalaxWrapper image={paralaxImage2} className={secondaryParalaxClasses}>
                <h1 className="App_paralax-title">{paralaxBlock2Title}</h1>
            </ParalaxWrapper>

            <TextBlock className={secondaryTextBlockClasses}>
                <h1>{textBlock2Title}</h1>
                <p>{textBlock2Text}</p>
            </TextBlock>

            <ParalaxWrapper image={paralaxImage3} className={secondaryParalaxClasses}>
                <h1 className="App_paralax-title">{paralaxBlock3Title}</h1>
            </ParalaxWrapper>

            <TextBlock className={primaryTextBlockClasses}>
                <h1>{textBlock3Title}</h1>
                <p>{textBlock3Text}</p>
            </TextBlock>

            <ParalaxWrapper image={paralaxImage1} className={primaryParalaxClasses}>
                <h1 className="App_paralax-title">{paralaxBlock4Title}</h1>
            </ParalaxWrapper>
        </div>
    );
}

export default App;
