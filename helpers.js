export {
    zeroPad,
    fromSeconds,
    toSeconds,
    getMonth,
}
function fromSeconds(seconds) {
    const keys = ["seconds", "minutes", "hours", "days"]
    const store = {}
    const points = keys.map((key) => breakpoints[key])
    for (const point of points) {
        const [a, b] = divmod(seconds, point, Array)
        store[breakpoint] = a
        seconds = b
    }
    return store
}

function toSeconds(o) {
    return sum(entries(o).map(([k,v]) => breakpoints[k] * v))
}

function getMonth(date) {
    const index = date.getMonth()
    return {
        name: variables.months.indexOf(index),
        number: index + 1,
        index,
    }
}


function zeroPad(x) {
    return String(x).length == 1 ? "0" + x : x
}
