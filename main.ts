basic.forever(function () {
    weatherbit.startWeatherMonitoring()
    basic.showString(convertToText(weatherbit.temperature()))
    basic.showString(convertToText(weatherbit.humidity()))
})
