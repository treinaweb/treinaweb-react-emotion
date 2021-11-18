import styled from '@emotion/styled/macro';

export const TimelineLine = styled('div')`
    height: 100%;
    width: var(--width);
    background-color: ${({ theme }) => theme.textSecondary};
    border-radius: 10px;
`;

export const TimelineContainer = styled('div')`
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.25);
    overflow: hidden;

    &:hover ${TimelineLine} {
        background-color: ${({ theme }) => theme.primary};
    }
`;

export const TimelineSlider = styled('input')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
`;
