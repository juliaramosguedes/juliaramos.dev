import React from "react";
import { useRouter } from "next/router";

import {
    ImageFrame,
    Section,
    Slogan,
    Texts,
    Title,
    TitleBorderOutline,
    Wrap,
} from '../styles/components/AboutMe';
import { Button, ColorYellow } from '../styles/components/Shared';

import Star from '../assets/star.svg';

const AboutMe: React.FC = (props) => {
    const router = useRouter();

    return (
        <Section id="about-me" {...props}>
            <Wrap>
                <TitleBorderOutline>
                    <Title><strong>About</strong><br/> me</Title>
                    <ImageFrame/>
                </TitleBorderOutline>
                <Texts>
                    <p>I am a brazilian software engineer at Ironhack, an international school with campuses in 8 countries, founded to revolutionize the way we learn about technology.
                    </p>
                    <p>My purpose is to open doors so people can have better life opportunities and I chose to do so through my expertise in technology, applied to the education market.
                    </p>
                    <p>Vegan for my love of animals and nature, an advocate for diversity, and an enthusiast of Chinese martial arts, science fiction, and guitar. I value the simplicity and subtleties of life.
                    </p>
                    <p>Eternal apprentice, I am constantly working on myself. As a professional, I believe that behavioral skills are just as important as technical skills.
                    </p>
                    <Button onClick={() => router.push("/CV")} title="Julia Ramos'resume">Click to see my resume</Button>
                </Texts>
                <Slogan>
                    <Star/>
                    <h3>One of my live mottos is
                        <br/>
                        <ColorYellow>
                            <strong>"You write code so other people understand."</strong>
                        </ColorYellow>
                    </h3>
                </Slogan>
            </Wrap>
        </Section>
    );
};

export default AboutMe;
