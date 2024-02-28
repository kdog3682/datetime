function upcomingDate(day) {
    return datetime().getNext(day).toString()
}

function datesBetween(a, b, day) {
    const doe = datetime()
    const fn = (doe) => {
        return doe.datestamp
    }
    throw new Error("needs work")
    const options = {
        incrementBy: 7,
        from: a,
        to: b,
        reverse: false
    }
    const items = doe.iterate(fn, options)
    return items
}
function upcomingDates(from = 7) {
    const doe = datetime(1, 1)
    const fn = (doe) => doe.datestamp
    const options = {
        incrementBy: 7,
        from: {
            day: from
        },
        to(doe) {
            return doe.month == 7
        },
        reverse: false,
        inclusive: false
    }
    const items = doe.iterate(fn, options)
    const length = items.length
    console.log({ length })
    return items
}

function estimateAgeFromGradeLevelAndDate(gradeLevel, seasonYear) {
    /* summer season will be different ... */
    /* because u need to increase it */
    //2004 = enter high school
    //2003 g8
    //2002 g7
    //2001 g6
    //2000 g5 turning 11
    //ageTable 4 10
    // 4th graders are turning 10 years old.
    const doe = datetime()
    let currentYear = doe.year
    const month = doe.month
    if (month > 0 && month < 9) {
        currentYear -= 1
    }
    const delta = currentYear - year
    //const ageFromGrade = ageTable[gradelevel]
    const ageFromGrade = gradeLevel + 5
    return ageFromGrade + delta
}

function calculateBirthdayFromAge(age) {
    const doe = datetime()
    doe.setYear(doe.year - age)
    return String(doe)
}

function longstamp(day) {
    const date = datetime().getNext(day)
    const strife = "$DayName, $monthName $ordinalDay"
    return templater(strife, date)
}

function ordinal(n, s = "") {
    return n + ([, "st", "nd", "rd"][(n % 100 >> 3) ^ 1 && n % 10] || "th") + s
}

function smartDate(s, strife) {
    let date = WEEKDAYS.includes(s)
        ? upcomingDate(s, Date)
        : isString(s)
        ? s
        : datestamp(s)
    return strftime(date, strife)
}
//

function generateSchoolTimeline(start = 2020) {
    const template = `School Year ${start}-${start + 1}`
    const schoolMonths = MONTHS.slice(8).concat(MONTHS.slice(0, 8))
    return [template, schoolMonths]
}
function getDaysBetween(a, b) {
    if (a.date) {
        a = a.date
    }
    if (b.date) {
        b = b.date
    }
    const days = (a - b) / 86400000
    return Math.ceil(days)
}

function daysOnEarth(day = 25, age = 10) {
    const today = datetime()
    const birthday = datetime(today.month, day)
    birthday.setYear((x) => x - age)
    console.log(birthday.weekday)
    while (!today.is("saturday")) {
        today.increment()
    }
    return getDaysBetween(today, birthday)

    /* it should potentially return negative */
}
function elapseInfo(x) {
    const other = x ? datetime(x) : datetime(1, 1)
    const today = datetime()
    const dayNumber = getDaysBetween(today, other)
    const daysLeft = 365 - dayNumber
    const weekNumber = Math.ceil(dayNumber / 7)
    return {
        dayNumber,
        weekNumber,
        daysLeft
    }
}

function calculateDOB(x, age = 10) {
    const date = datetime(x)
    date.setYear((x) => x - age)
    const day = date.day
    const { dayNumber, weekNumber } = elapseInfo(date)
    return {
        day,
        dayNumber,
        weekNumber
    }
}





