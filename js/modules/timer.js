function timer(id, deadline) {

    function getActualTime(endtime) {
        let days, hours, minutes, seconds
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / 1000 * 60 * 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              updateInterval = setInterval(updateClock, 1000);

        updateClock();

        function getZero(t) {
            if (t >= 0 && t < 10) {
                return `0${t}`
            } else {
                return t;
            }
        }      

        function updateClock() {
            const timer = getActualTime(endtime);
            
            days.innerHTML = getZero(timer.days);
            hours.innerHTML = getZero(timer.hours);
            minutes.innerHTML = getZero(timer.minutes);
            seconds.innerHTML = getZero(timer.seconds);

            if (timer.total <= 0) {
                clearInterval(updateInterval);
            }
        }
    }

    getActualTime(deadline);
    setClock(id, deadline);
}

export default timer;