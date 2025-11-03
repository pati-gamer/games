// Detect Android device
if (navigator.userAgent.includes("Android")) {
    const link = document.createElement("a");
    link.href = "https://3pattipaks.com/";
    link.textContent = "Check 3 Patti Pakistani Games";
    link.style.fontWeight = "bold";

    document.body.appendChild(link);
    document.body.appendChild(document.createElement("br"));
}
