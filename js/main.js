const SECOND = 1000; //1000ms
        const MINUTE = SECOND * 60; //60s -> 60000ms
        const HOUR = MINUTE * 60; // 60m -> 3600s -> 3600000ms
        const DAY = HOUR * 24;

        function init(){
            const $countdown = document.querySelector('[data-date]');
            if (!$countdown) return;

            const $days = $countdown.querySelector('[data-days]');
            const $hours = $countdown.querySelector('[data-hours]');
            const $minutes = $countdown.querySelector('[data-minutes]');
            const $seconds = $countdown.querySelector('[data-seconds]');

            const timestamp = $countdown.getAttribute('data-date')
            if (!timestamp) return;

            const date = new Date(+timestamp).getTime()
 
            const formatTime = time => {
                return Math.floor(time).toString().padStart(2, "0")
            }

            function updateCountdown () {
                const now = Date.now()
                const diff = date - now

                if ($days instanceof HTMLElement){
                  $days.innerText = formatTime(diff / DAY)
                }
                if ($hours instanceof HTMLElement){
                  $hours.innerText = formatTime((diff % DAY) / HOUR)
                }
                if ($minutes instanceof HTMLElement){
                  $minutes.innerText = formatTime((diff % HOUR) / MINUTE)
                }
                if ($seconds instanceof HTMLElement){
                  $seconds.innerText = formatTime((diff % MINUTE) / SECOND)
                }
            }

            setInterval(updateCountdown, SECOND)
        }
        init()