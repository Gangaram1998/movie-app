function carousel() {
  let images = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/80/1320080-h-8fc543bf9335",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6845/1376845-h-d0e066aa0374",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7333/1317333-h-c4cd88bedeb7",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7382/1357382-h-e8e07b3880aa",
  ];

  let img = document.createElement("img");
  img.src = images[0];
  document.getElementById("carousel").append(img);
  let i = 1;

  img.style.width = "50%";

  setInterval(function () {
    if (i == images.length) {
      i = 0;
    }
    img.src = images[i];
    document.getElementById("carousel").append(img);
    i++;
  }, 3000);
}
export default carousel;
