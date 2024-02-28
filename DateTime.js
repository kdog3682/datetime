class DateTime {
    constructor(x) {
        this.date = parse(x)
    }
    equals(other) {
        return this.toString() == other.toString()
    }
    replace(fn) {
        return fn(this.copy())
    }
    copy() {
        return new this.constructor(this.date)
    }
    toString(template) {
        return strftime(template, this)
    }
    reset() {
        this.date.setHours(0)
        this.date.setMinutes(0)
        this.date.setSeconds(1)
        // um is this correct?
    }

    get(key) {
        switch(key) {
            case 'day': return getDay()
            case 'seconds': return this.date.getSeconds()
            case 'year': return this.date.getFullYear()
            case 'minutes': return this.date.getMinutes()
            case 'month': return getMonth(this.date)
            case 'hours': return this.date.getHours()
            case 'timestamp': return this.date.getTime()
            case 'ampm': return this.date.getHours() > 12 ? 'PM' : 'AM'
            case 'season': return variables.seasons[this.get('month').name]
    }
    set(key, value) {
        switch(key) {
            case 'month': return this.date.setMonth(x)
            case 'day':   return this.date.setDay(x)
            case 'year':
            case 'minute':
            case 'second':
                const current = this.get(key)
                const payload = fparse(value, current)
            case 'season':
            case 'week':
                return 
        }
    }
    increment(n = 1) {
        this.date.setTime(this.date.getTime() + 86400000 * n)
        return this.date
    }
    decrement(n = 1) {
        this.increment(-n)
    }
    is(x) {
        switch (type(x)) {
            case 'DateTime':
                return this.equals(x)
            case 'String':
                return this.get('day').name == x.toLowerCase()
        }
    }
    next(x, dir = 1) {
        const date = parse(x)
        return this.find((current, count) => {
            if (count == 0) {
                return false
            }
            return current.is(date)
        }, dir)
    }
    prev(x) {
        return this.next(x, -1)
    }
    find(fn, dir) {
        for (let i = 0; i < n; i++) {
            
        }
    }
}
