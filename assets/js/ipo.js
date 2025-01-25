    // This file handles the display of IPO updates
document.addEventListener('DOMContentLoaded', function() {
    const ipoUpdates = [
        { name: "Company A", date: "2025-02-01", price: "₹1000" },
        { name: "Company B", date: "2025-02-10", price: "₹1500" },
    ];

    const ipoUpdatesContainer = document.getElementById("ipo-updates");
    
    ipoUpdates.forEach(ipo => {
        const ipoDiv = document.createElement('div');
        ipoDiv.classList.add('bg-gray-200', 'p-4', 'rounded');
        ipoDiv.innerHTML = `
            <h2 class="text-xl font-bold">${ipo.name}</h2>
            <p>Date: ${ipo.date}</p>
            <p>Price: ${ipo.price}</p>
        `;
        ipoUpdatesContainer.appendChild(ipoDiv);
    });
});
