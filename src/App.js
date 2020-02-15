import {LoremIpsum} from "lorem-ipsum";
import React from 'react';
import './App.scss';
import paralaxImage1lg from './assets/1-lg.jpg'
import paralaxImage1md from './assets/1-md.jpg'
import paralaxImage1sm from './assets/1-sm.jpg'
import paralaxImage1xsm from './assets/1-xsm.jpg'
import paralaxImage2lg from './assets/2-lg.jpg'
import paralaxImage2md from './assets/2-md.jpg'
import paralaxImage2sm from './assets/2-sm.jpg'
import paralaxImage2xsm from './assets/2-xsm.jpg'
import paralaxImage3lg from './assets/3-lg.jpg'
import paralaxImage3md from './assets/3-md.jpg'
import paralaxImage3sm from './assets/3-sm.jpg'
import paralaxImage3xsm from './assets/3-xsm.jpg'
import Footer from "./components/Footer/Footer";
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

const paralax1Images = {
    lg: paralaxImage1lg,
    md: paralaxImage1md,
    sm: paralaxImage1sm,
    xsm: paralaxImage1xsm
};

const paralax2Images = {
    lg: paralaxImage2lg,
    md: paralaxImage2md,
    sm: paralaxImage2sm,
    xsm: paralaxImage2xsm
};

const paralax3Images = {
    lg: paralaxImage3lg,
    md: paralaxImage3md,
    sm: paralaxImage3sm,
    xsm: paralaxImage3xsm
};

// endregion

function App() {
    return (
        <div className="App">
            <ParalaxWrapper images={paralax1Images} className={primaryParalaxClasses}>
                <h1 className="App_paralax-title">{paralaxBlock1Title}</h1>
            </ParalaxWrapper>

            <TextBlock className={primaryTextBlockClasses}>
                <h1>{textBlock1Title}</h1>
                <p>{textBlock1Text}</p>
            </TextBlock>

            <ParalaxWrapper images={paralax2Images} className={secondaryParalaxClasses}>
                <h1 className="App_paralax-title">{paralaxBlock2Title}</h1>
            </ParalaxWrapper>

            <TextBlock className={secondaryTextBlockClasses}>
                <h1>{textBlock2Title}</h1>
                <p>{textBlock2Text}</p>
            </TextBlock>

            <ParalaxWrapper images={paralax3Images} className={secondaryParalaxClasses}>
                <h1 className="App_paralax-title">{paralaxBlock3Title}</h1>
            </ParalaxWrapper>

            <TextBlock className={primaryTextBlockClasses}>
                <h1>{textBlock3Title}</h1>
                <p>{textBlock3Text}</p>
            </TextBlock>

            <ParalaxWrapper images={paralax1Images} className={primaryParalaxClasses}>
                <h1 className="App_paralax-title">{paralaxBlock4Title}</h1>
            </ParalaxWrapper>

            <Footer/>
        </div>
    );
}

export default App;
