class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        let repeatTime = this.alarmCollection.some(item => item.time === time); 
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
                
        } else if (repeatTime) {
            console.warn('Уже присутствует звонок на это же время')
        } 
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });
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
        clearInterval(this.intervalId);
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
