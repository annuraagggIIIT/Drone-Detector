document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    const startScanButton = document.getElementById('startScan');

    // Checking if the Web Bluetooth API is supported on the device
    if ('bluetooth' in navigator) {
        outputDiv.innerHTML = 'Web Bluetooth is supported!';     // this  will be displayed if supported
    } else {
        outputDiv.innerHTML = 'Web Bluetooth is not supported on this device/browser.';  // this will be displayed if not supported and it won't follow the rest actions
        return;
    }

    // Handle button click to start Bluetooth scan if supported 
    startScanButton.addEventListener('click', () => {
        
        navigator.bluetooth.requestDevice({ acceptAllDevices: true })
            .then(device => {
                // Device was selected
                outputDiv.innerHTML = `Device Name: ${device.name}<br>Device ID: ${device.id}`;
            })
            .catch(error => {
                outputDiv.innerHTML = `Error: ${error.message}`;
            });
    });
});