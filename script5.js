const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");

btn.addEventListener('click', (download) => {
  var opt = {
    margin: [0.5, 0, 0, 0],
    filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 2 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  const conta = this.document.getElementById("contan");
  html2pdf().from(conta).set(opt).save();
})
btn1.addEventListener('click', (downloade) => {
  var opt = {
    margin: [0, 1.1, 0, 0],
    filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  const conta = this.document.getElementById("contan");
  html2pdf().from(conta).set(opt).save();
})
