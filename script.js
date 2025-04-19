function revealDescription(id) {
    document.getElementById(id).style.display = 'block';
}

function useCoupon(couponId) {
    document.getElementById(couponId).style.backgroundColor = "#808080";
    document.getElementById(couponId).querySelector(".use-btn").classList.add("used");
    document.getElementById(couponId).querySelector(".use-btn").innerText = "Used";
    document.getElementById(couponId).querySelector(".use-btn").disabled = true;
}
document.querySelector('.coupon-container').addEventListener('wheel', function (evt) {
    evt.preventDefault();
    this.scrollLeft += evt.deltaY;
});
