document.getElementById("languageSelect").addEventListener("change", function () {
  const lang = this.value;
  if (lang === "bn") {
    document.querySelector(".logo-text").innerText = "ফ্রেন্ডচ্যাট";
    document.querySelector("button").innerText = "লগইন";
    document.querySelector(".forgot-link").innerText = "পাসওয়ার্ড ভুলে গেছেন?";
    document.querySelector(".create-btn").innerText = "নতুন একাউন্ট তৈরি করুন";
    document.querySelector(".terms-link").innerText = "প্রযোজ্য শর্তাবলি";
    document.querySelector("footer p").innerText = "কামিং সুন";
  } else {
    document.querySelector(".logo-text").innerText = "Friendchat";
    document.querySelector("button").innerText = "Log In";
    document.querySelector(".forgot-link").innerText = "Forgotten password?";
    document.querySelector(".create-btn").innerText = "Create New Account";
    document.querySelector(".terms-link").innerText = "Terms & Conditions";
    document.querySelector("footer p").innerText = "Coming soon";
  }
});