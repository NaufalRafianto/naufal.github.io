$(document).ready(() => {
    const home = $("#home_button")
    const about = $("#about_button")
    const work = $("#work_button")
    const contact = $("#contact_button")
    const activeCircle = $("#active_circle")
    const redButton = $("#home_content_icon_red")
    const greenButton = $("#home_content_icon_green")
    const yellowButton = $("#home_content_icon_yellow")
    const homeContent = $("#home_content")
    const homeOpen = $("#home_open_icon")

    const setCSS = (id, property, value) => {
        return id.css(property, value);
    }

    const slider = (button, link) => {

        button.click(() => {
            window.location.href = link
            if (screen.width <= 800) {
                setCSS(activeCircle, "left", "0")
                setCSS(activeCircle, "bottom", "7.5px")
                if (button === home) {
                    setCSS(activeCircle, "left", "0")
                    setCSS(activeCircle, "bottom", "7.5px")
                }
                else if (button === about) {
                    setCSS(activeCircle, "left", "30%")
                    setCSS(activeCircle, "bottom", "7.5px")

                }
                else if (button === work) {
                    setCSS(activeCircle, "left", "60%")
                    setCSS(activeCircle, "bottom", "7.5px")

                }
                else if (button === contact) {
                    setCSS(activeCircle, "left", "90%")
                    setCSS(activeCircle, "bottom", "7.5px")

                }
            }
            else {
                setCSS(activeCircle, "top", "0")
                setCSS(activeCircle, "left", "5px")

                if (button === home) {
                    setCSS(activeCircle, "top", "0")
                }
                else if (button === about) {
                    setCSS(activeCircle, "top", "150px")

                }
                else if (button === work) {
                    setCSS(activeCircle, "top", "310px")

                }
                else if (button === contact) {
                    setCSS(activeCircle, "top", "460px")

                }
            }
        })
    }

    slider(home, "#header")
    slider(about, "#about")
    slider(work, "#work")
    slider(contact, "#contact")

    redButton.click(() => {
        homeContent.toggleClass("close")
        homeContent.removeClass("minimize")
        homeContent.removeClass("maximize")
        $("#home_open").removeClass("close")

    })
    yellowButton.click(() => {
        homeContent.toggleClass("minimize")
        homeContent.removeClass("close")
        homeContent.removeClass("maximize")
    })
    greenButton.click(() => {
        homeContent.toggleClass("maximize")
        homeContent.removeClass("close")
        homeContent.removeClass("minimize")
        window.location.href = '#home'
    })

    homeOpen.click(() => {
        homeContent.toggleClass("close")
        $("#home_open").toggleClass("close")
    })





})