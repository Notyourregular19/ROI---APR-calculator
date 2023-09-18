function calculateROI() {
    const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
    const finalValue = parseFloat(document.getElementById("finalValue").value);
    const investmentPeriod = parseFloat(document.getElementById("investmentPeriod").value);

    const roi = ((finalValue - initialInvestment) / initialInvestment) * 100;

    document.getElementById("result").innerHTML = `ROI: ${roi.toFixed(2)}%`;
}

function calculateAPR() {
    const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
    const finalValue = parseFloat(document.getElementById("finalValue").value);
    const investmentPeriod = parseFloat(document.getElementById("investmentPeriod").value);

    const apr = (((finalValue / initialInvestment) ** (1 / investmentPeriod)) - 1) * 100;

    document.getElementById("result").innerHTML = `APR: ${apr.toFixed(2)}%`;
}