export const HeadwindTailwindComponent = (
    integerWindDirection,
    integerRunwayHeading,
    integerWindSpeed,
) => {

    let degree = integerWindDirection - integerRunwayHeading;

    if (integerWindDirection > 0 && integerRunwayHeading > 0) {
        return ((integerWindSpeed) * ((Math.cos(degree * (Math.PI / 180.0)))));
    } else {
        return 0;
    }
}

