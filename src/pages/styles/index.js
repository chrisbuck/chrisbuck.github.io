import React from "react";

import NeonBorder from "@components/NeonBorder";
import NeonText from "@components/NeonText";
import Section from "@components/Section";

const Styles = () => {
    return (
        <div>
            <Section bgColor="blueGrey" color="white">
                <div>This is text</div>
            </Section>
            <Section bgColor="brown" color="white">
                <div>This is text</div>
            </Section>
            <Section bgColor="charcoal" color="white">
                <div>This is text</div>
            </Section>
            <Section bgColor="purpleBlue" color="white">
                <div>This is white text</div>
            </Section>
            <Section bgColor="purpleBlue" color="whiteBlue">
                <div>This is whiteBlue text</div>
            </Section>
            <Section bgColor="maroon" color="white">
                <div>This is white text</div>
            </Section>
            <Section bgColor="maroon" color="lightPink">
                <div>This is lightPink text</div>
            </Section>
            <Section bgColor="red" color="white">
                <div>This is white text</div>
            </Section>
            <Section bgColor="neonBgDark" color="white">
                <NeonText text="This is neon text" />
            </Section>
            <Section bgColor="neonBgDark" color="white">
                <NeonText text="THIS IS NEON PINK TEXT" />
            </Section>
            <Section bgColor="neonBgDark" color="white">
                <NeonText theme="neonBlue" text="THIS IS NEON BLUE TEXT" />
            </Section>
            <Section bgColor="neonBgDark" color="white">
                <NeonText theme="neonGreen" text="THIS IS NEON GREEN TEXT" />
            </Section>
            <Section bgColor="neonBgDark" color="white">
                <NeonBorder>
                    <NeonText theme="neonOrange" text="THIS IS NEON ORANGE TEXT" />
                </NeonBorder>
            </Section>
            <Section bgColor="neonBgDark" color="white">
                <NeonBorder theme="neonBlue">
                    <NeonText theme="neonPurple" text="THIS IS NEON PURPLE TEXT" />
                </NeonBorder>
            </Section>
            <Section bgColor="neonBgDark" color="white">
                <NeonBorder theme="neonYellow">
                    <NeonText theme="neonOrange" text="THIS IS NEON ORANGE TEXT" />
                </NeonBorder>
            </Section>
            <Section bgColor="neonBgDark" color="white">
                <NeonBorder theme="neonGreen">
                    <NeonText theme="neonYellow" text="THIS IS NEON YELLOW TEXT" />
                </NeonBorder>
            </Section>
        </div>
    );
};

export default Styles;
