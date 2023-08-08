const paymentForm = document.getElementById("payment-form");

paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Perform payment logic
    // For demo purposes, let's assume successful payment
    alert("Payment successful! Thank you for your payment.");
});
