$(document).ready(() => {
    const home = $("#home")
    const about = $("#about")
    const work = $("#work")
    const contact = $("#contact")
    const activeCircle = $("#active_circle")
    const redButton = $("#home_content_icon_red")
    const greenButton = $("#home_content_icon_green")
    const yellowButton = $("#home_content_icon_yellow")
    const homeContent = $("#home_content")
    const homeOpen = $("#home_open_icon")

    const setCSS = (id, property, value) => {
        return id.css(property, value);
    }
    a
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