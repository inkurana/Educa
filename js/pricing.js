function toggleBilling() {
    const isYearly = document.getElementById('billing-switch').checked;
    
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');
    
    const priceMonthly = document.getElementById('price-monthly');
    const priceYearly = document.getElementById('price-yearly');
    
    const descMonthly = document.getElementById('desc-monthly');
    const descYearly = document.getElementById('desc-yearly');

    if (isYearly) {
        // Switch to Yearly Math (showing equivalent monthly cost)
        monthlyLabel.classList.remove('active');
        yearlyLabel.classList.add('active');
        
        // Show discounted prices
        priceMonthly.innerText = '30';
        descMonthly.innerText = 'Billed $360 annually.';
        
        priceYearly.innerText = '29';
        descYearly.innerText = 'Billed $348 annually.';
    } else {
        // Switch to Monthly Math
        yearlyLabel.classList.remove('active');
        monthlyLabel.classList.add('active');
        
        // Show standard prices
        priceMonthly.innerText = '35';
        descMonthly.innerText = 'Billed monthly.';
        
        priceYearly.innerText = '39'; 
        descYearly.innerText = 'Billed monthly.';
    }
}