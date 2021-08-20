$(document).ready(function () {

    const flatPath = $(".flats path")
    const flatLink = $(".flat-link")

    const viewFlatsButton = $(".view-flats")

    const modal = $(".modal")
    const modalCloseButton = $(".modal-close-button")

    const counterUp = $(".counter-up")
    const counterDown = $(".counter-down")
    const floorPath = $(".home-image path")
    let currentfloor = 02

    flatPath.on('mouseover', function () {
        flatLink.removeClass("current-flat-link")
        flatPath.removeClass("current-flat")
        currentFlat = $(this).attr("data-flat")
        $(`a[data-flat="${currentFlat}"]`).toggleClass("current-flat-link")
    })
    
    flatLink.on('mouseover', function () {
        flatLink.removeClass("current-flat-link")
        flatPath.removeClass("current-flat")
        currentFlat = $(this).attr("data-flat")
        $(`.flats path[data-flat="${currentFlat}"]`).toggleClass("current-flat")
    })

    viewFlatsButton.on('click', toggleModal)

    floorPath.on('click', toggleModal)
    modalCloseButton.on('click', toggleModal)

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

    function toggleModal() {
        modal.toggleClass("is-open")
    }
})