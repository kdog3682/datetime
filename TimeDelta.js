class TimeRange {
    getRange(from, to) {
        const From = new DateObject(from)
        const To = new DateObject(to)
        const end = To.datestamp

        const iterate = (f) => {
            const date = From.copy()
            const store = []
            for (let i = 0; i < 365; i++) {
                push(store, f(date))
                date.increment()
                if (date.datestamp == end) {
                    break
                }
            }
            return store
        }

        const g = (day) => {
            const lambda = (date) => {
                return date.is(day) ? date.copy() : null
            }
            return lambda
        }

        const Range = {
            /** ra **/
            get(day) {
                this.children = iterate(g(day))
                return this.children
            },
            setDay() {}
        }
        /*
         * shown above ... is basically a class.
         * */
        return Range
    }
    constructor(options) {}
}
class TimeDelta {
    constructor(options) {}
    delta() {

 function delta(a, b) {
    if (a.date) {
        a = a.date
    }
    if (b.date) {
        b = b.date
    }
    return (a - b) / 1000
}   }
dayDelta(today, startDob) {


    let delta = timeDelta(today, startDob)
    let k = 1
    if (delta < 0) {
        delta *= -1
        k = -1
    }
    let days = Math.round(convertSecondsTo(delta, "days"))
    return days * k
}
}

