window.onload = function(e) {
    let cartSummmary = document.getElementById("hoverId");
    cartSummmary.addEventListener("mouseenter", () => {
        dataLayer.push({
            "event" : "summary_cart_seen",
            "page" : window.location.pathname
        })
    })

}