function generateQRCode() {
    var text = document.getElementById("text").value;
    document.getElementById("qrcode").innerHTML = '';
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: text,
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }
  