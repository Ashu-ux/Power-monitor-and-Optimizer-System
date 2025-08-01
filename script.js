let ctx = document.getElementById('energyChart').getContext('2d');
        let energyChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['May', 'June', 'July'],
                datasets: [{
                    label: 'kWh Used',
                    data: [150, 200, 250],
                    backgroundColor: ['#38bdf8', '#facc15', '#f43f5e']
                }]
            }
        });

        function toggleAppliance(device) {
            fetch(`http://your-esp-ip/control?device=${device}`, { method: 'GET' })
                .then(response => response.text())
                .then(data => alert(`Device: ${device} - ${data}`));
        }