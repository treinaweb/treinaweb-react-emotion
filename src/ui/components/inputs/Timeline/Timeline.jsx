import {
    TimelineContainer,
    TimelineLine,
    TimelineSlider,
} from './Timeline.style';

export default function Timeline(props) {
    return (
        <TimelineContainer>
            <TimelineLine style={{ '--width': `${props.width}%` }} />
            <TimelineSlider
                type="range"
                onChange={(event) => props.onChangeWidth(event.target.value)}
            />
        </TimelineContainer>
    );
}
