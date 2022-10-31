import { 
    Hero,
    HeroHeader,
    HeroSubHeader,
    HeroBottomFlag
} from '../styles/Hero'

import {
    ButtonPrimary
}   from '../styles/Buttons'

export default function() {
    return (
        <Hero>
            <HeroHeader>Energy That Moves</HeroHeader>
            <HeroSubHeader>Join for as low as $9.99/monyh</HeroSubHeader>
            <ButtonPrimary>Start Today</ButtonPrimary>
            <HeroBottomFlag>
                <span />
                <span />
                <span />
            </HeroBottomFlag>
        </Hero>
    )
}