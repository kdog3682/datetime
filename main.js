
import {fixFloatingPoint, lerp, clamp, inverseLerp, average, sum, ffp, toRadians} from "/home/kdog3682/2024-javascript/js-toolkit/mathkit/index.js"
import { entries } from "/home/kdog3682/2023/utils.js"
import {DateTime} from "./DateTime.js"

function datetime(x) {
    return new DateTime(x)
}
function map(x, fn) {
    return sum(entries(x).map(fn))
}
datetime.convert = convert

export {
    datetime
}
// console.log(datetime().get('day'))

function convert(obj, to) {
    const breakpoints = {
        seconds: 1,
        ms: 0.001,
        minutes: 60,
        hours: 3600,
        days: 86400,
        months: 2592000,
    }
    const fn = ([k,v]) => {
        const value = breakpoints[k] * v
        if (to in breakpoints) {
            return Math.round(value / breakpoints[to])
        }
        return value
    }
    return map(obj, fn)
}
