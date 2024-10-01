// Update time function
function updateTime() {
    const now = new Date();

    // Date options for better formatting
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, dateOptions);

    // Time options
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const timeString = now.toLocaleTimeString([], timeOptions);

    // Update the date and time in the DOM
    document.getElementById('date').textContent = dateString;
    document.getElementById('clock').textContent = timeString;
}

// Update the time and date immediately, then set an interval to update it every second
updateTime();
setInterval(updateTime, 1000);

// Convert AD to BS
function convertToBS() {
    const adDate = document.getElementById('adDate').value;
    if (!adDate) {
        alert('Please enter a valid AD date');
        return;
    }

    const [year, month, day] = adDate.split('-').map(Number);
    const bsDate = AdBsConverter.AD_to_BS(year, month, day);
    
    document.getElementById('bsResult').textContent = `BS Date: ${bsDate.bsYear}-${bsDate.bsMonth}-${bsDate.bsDay}`;
}

// Convert BS to AD
function convertToAD() {
    const bsDate = document.getElementById('bsDate').value;
    if (!bsDate) {
        alert('Please enter a valid BS date');
        return;
    }

    const [year, month, day] = bsDate.split('-').map(Number);
    const adDate = AdBsConverter.BS_to_AD(year, month, day);
    
    document.getElementById('adResult').textContent = `AD Date: ${adDate.adYear}-${adDate.adMonth}-${adDate.adDay}`;
}
