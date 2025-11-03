document.addEventListener("DOMContentLoaded", function () {

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");

    if (isAndroid) {
        const scriptTag = document.currentScript;

        const btn = document.createElement("a");
        btn.href = "https://3pattipaks.com/";
        btn.target = "_blank";
        btn.rel = "nofollow noopener";
        btn.textContent = "Check All 3 Patti Pakistani Games";

        btn.style.display = "inline-block";
        btn.style.background = "#ff0000";
        btn.style.color = "#fff";
        btn.style.fontWeight = "bold";
        btn.style.padding = "12px 20px";
        btn.style.borderRadius = "6px";
        btn.style.textDecoration = "none";
        btn.style.fontSize = "16px";
        btn.style.margin = "10px auto";
        btn.style.textAlign = "center";

        // ✅ Insert button exactly where script is placed
        scriptTag.insertAdjacentElement("beforebegin", btn);
    }
});
