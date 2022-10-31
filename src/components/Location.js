import {
    Location,
    LocationHeader,
    LocationSubHeader
} from '../styles/Location'

import LocationSVG from '../svg/Location'

export default function() {
    return (
        <Location>
            <LocationHeader>Find your location</LocationHeader>
            <LocationSVG />
            <LocationSubHeader>Join today!</LocationSubHeader>
        </Location>
    )
}