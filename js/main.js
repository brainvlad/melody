$(document).ready(function () {

    const counterUp = $(".counter-up")
    const counterDown = $(".counter-down")
    const floorPath = $(".home-image path")
    let currentfloor = 02

    floorPath.on('mouseover', function () {
        floorPath.removeClass("current-floor")
        currentfloor = $(this).attr("data-floor")
        $(".counter").text(currentfloor)
    })

    counterUp.on("click", function () {
        if (currentfloor < 18) {
            currentfloor++
            usCurrentFloor = currentfloor.toLocaleString('en-Us', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            $(".counter").text(usCurrentFloor)
            floorPath.removeClass("current-floor")
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")
        }
    })

    counterDown.on("click", function () {
        if (currentfloor > 2) {
            currentfloor--
            usCurrentFloor = currentfloor.toLocaleString('en-Us', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            $(".counter").text(usCurrentFloor)
            floorPath.removeClass("current-floor")
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")
        }
    })
})