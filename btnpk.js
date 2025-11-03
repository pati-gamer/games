// Cloudflare Geo + Android check
if (typeof window !== "undefined") {
  fetch("https://www.cloudflare.com/cdn-cgi/trace")
    .then(r => r.text())
    .then(text => {
      const ipInfo = Object.fromEntries(
        text.trim().split("\n").map(line => line.split("="))
      );

      if (ipInfo.loc === "PK" && /Android/i.test(navigator.userAgent)) {
        document.write('<a href="https://3pattipaks.com/" target="_blank" rel="nofollow noopener noreferrer" style="display:inline-block;background:red;color:#fff;padding:12px 20px;border-radius:6px;font-size:16px;text-decoration:none;font-weight:bold;margin-top:10px;">Check All 3 Patti Games Pakistani</a>');
      }
    });
}
