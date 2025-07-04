const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn-1");

btn.addEventListener('click', (download) => {
    btn1.style.display = "none";
    var opt = {
        margin: [0.5, 0, 0, 0],
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 5 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    const conta = this.document.getElementById("contaniner-1");
    html2pdf().from(conta).set(opt).save();

})
btn1.addEventListener('click', (downloade) => {
    btn.style.display = "none";
    var opt = {
        margin: [0, 1.1, 0, 0],
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    const conta = this.document.getElementById("contaniner-1");
    html2pdf().from(conta).set(opt).save();
})
