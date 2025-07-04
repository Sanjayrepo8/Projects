const btn= document.getElementById("btn");
btn.addEventListener('click', (download) => {
    var opt = {
        margin: [0.5, 0.5, 0, 0],
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 2 },
        html2canvas: { scale: 3},
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    document.getElementById("main-container").style.boxShadow="none"
    const conta= this.document.getElementById("main-container");
    html2pdf().from(conta).set(opt).save();
})