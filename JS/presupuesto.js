document.addEventListener("DOMContentLoaded", function() {
    const producto = document.getElementById("producto");
    const extras = document.querySelectorAll(".extra");
    const totalSpan = document.getElementById("total");
    
    function calcularTotal() {
        let total = parseInt(producto.value);
        extras.forEach(extra => {
            if (extra.checked) {
                total += parseInt(extra.value);
            }
        });
        totalSpan.textContent = total;
    }
    
    producto.addEventListener("change", calcularTotal);
    extras.forEach(extra => extra.addEventListener("change", calcularTotal));
});