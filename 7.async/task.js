class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        try {
            let repeatTime = this.alarmCollection.forEach(item => item.time === time); 
            if(time && callback && !repeatTime) {
                this.alarmCollection.push({
                    callback: callback,
                    time: time,
                    canCall: true
                });                
            } else if (repeatTime) {
                console.warn('Уже присутствует звонок на это же время')
            } else {
                throw new Error('Отсутствуют обязательные аргументы')
            }
        } catch (Error) {
            console.log(error);
        }
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    }

    start() {
        if(!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((item) => {
                    if(item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                        item.canCall = false;
                        item.callback();
                    }
                });
            }, 1000);
        }
    }

    stop() {
        clearInterval();
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item) => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}