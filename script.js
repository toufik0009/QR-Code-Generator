let qrImg = document.querySelector("#qrImg"),
  myTxt = document.querySelector("#myTxt"),
  QrGen = document.querySelector("#gen"),
  download = document.querySelector("#download")

QrGen.addEventListener("click", () => {
  //Create QR Code:-->
  let urlApi = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${myTxt.value}`;
  qrImg.src = urlApi;

  //Download btn show and hide:-->
  if (myTxt.value == "") {
    download.style.display = "none";
  } else {
    download.style.display = "inline";
  }

  //Download QR Code:-->
  download.addEventListener("click", async () => {
    try {
      const res = await fetch(urlApi);
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      let date =new Date().toLocaleTimeString();
      link.download ="QR Gen "+ date;
      document.body.appendChild(link);
      link.click();

    } catch (error) {
      console.error("Failed to download image:", error);
    }
  });
});
