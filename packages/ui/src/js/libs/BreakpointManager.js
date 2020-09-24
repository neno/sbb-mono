export const breakpoints = {
    zero: 0,
    mobile: 643,
    tablet: 1025,
    desktop: 1281,
    desktopLg: 1921,
    wide: 2561,
    ultra: 3841,
};

export class Breakpointer {
    constructor() {
        this.breakpoints = breakpoints;
        this.breakpointValues = Object.values(this.breakpoints);
    }

    testBreachkpoint(match, minmax = 'min-width') {
        if (!this.breakpointValues.includes(match)) {
            throw new Error(
                `Breakpoint '${match}' is not defined. Available breakpoints are: ${this.breakpointValues.join(
                    ', ',
                )}`,
            );
        }
        return window.matchMedia(`(${minmax}: ${match}px)`).matches;
    }

    matches(match, minmax) {
        if (!match) {
            throw new Error('match() expected one parameter.');
        }

        if (typeof match === 'string') {
            return this.testBreachkpoint(match, minmax);
        } if (Array.isArray(match)) {
            let isMatching = false;
            match.forEach(breakpoint => {
                if (this.testBreachkpoint(breakpoint, minmax)) {
                    isMatching = true;
                }
                return isMatching;
            });
        }

        throw new Error(
            'Sorry, your given value must be either a string or an array.',
        );
    }

    between(min, max) {
        return (
            this.testBreachkpoint(min)
            && this.testBreachkpoint(max, 'max-width')
        );
    }

    except(smallerThan, biggerThan) {
        return (
            this.testBreachkpoint(smallerThan, 'max-width')
            || this.testBreachkpoint(biggerThan)
        );
    }
}
