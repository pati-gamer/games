// contact.js
(function () {
  function addContactBox() {
    var div = document.createElement("div");
    div.style.marginTop = "40px";
    div.style.padding = "10px 0";
    div.style.textAlign = "center";
    div.style.fontSize = "14px";

    div.innerHTML = `
      Contact Us For SEO, Paid Ads, Promotion, Sponsorship, Partnership<br>
      Telegram: <a href="https://t.me/Marketyfy" target="_blank">@Marketyfy</a> |
      WhatsApp: <a href="https://wa.me/447465688692" target="_blank">+447465688692</a> |
      Email: <a href="mailto:mia789145@gmail.com" target="_blank">mia789145@gmail.com</a>
    `;
    
    document.body.appendChild(div);
  }

  // Wait until page finished loading
  if (document.readyState === "complete") {
    addContactBox();
  } else {
    window.addEventListener("load", addContactBox);
  }
})();
