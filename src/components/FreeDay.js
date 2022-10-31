import { 
    HeroBottomFlag
} from '../styles/Hero'

import {
    FreeDay,
    FreeDayHeader
} from '../styles/FreeDay'

export default function() {
    return (
        <FreeDay style={{ backgroundImage: `url('https://ampedfitness.s3.amazonaws.com/ampedfitness-free.png')` }}>
            <FreeDayHeader>Free day pass</FreeDayHeader>
            <HeroBottomFlag>
                <span />
                <span />
                <span />
            </HeroBottomFlag>
        </FreeDay>
    )
}