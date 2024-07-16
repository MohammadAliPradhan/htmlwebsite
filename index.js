window.onload = function (e) {
    let cartSummary = document.getElementById("hoverId")
    cartSummary.addEventListener("mouseenter", () => {
        console.log('mouse hovered')
        dataLayer.push({
            "event" : "summary_cart_seen",
            "data" : window.location.pathname
        })
    })
}