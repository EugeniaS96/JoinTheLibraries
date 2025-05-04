import ru from "../data/ru.js";
import en from "../data/en.js";
const btn = document.getElementById("btn");
const langOpt = document.querySelector("select");

const output = (err, t) => {
  if (err) {
    return console.log("something went wrong loading", err);
  }

  document.getElementById("usname").innerHTML = t("username");
  document.getElementById("psw").innerHTML = t("password");
  document.getElementById("dateinp").innerHTML = t("dateinp");
  document.getElementById("selLang").innerHTML = t("selLang");
  langOpt.options[(langOpt.value = "0")].text = t("opt1");
  langOpt.options[(langOpt.value = "1")].text = t("opt2");
  langOpt.options[(langOpt.value = "2")].text = t("opt3");
  langOpt.options[(langOpt.value = "3")].text = t("opt4");
  langOpt.options[(langOpt.value = "4")].text = t("opt5");
  document.getElementById("subscribe").innerHTML = t("subscribe");
  document.getElementById("radio1").innerHTML = t("radio1");
  document.getElementById("radio2").innerHTML = t("radio2");
  document.querySelector(".sbmbtn").innerHTML = t("submit");
  document.querySelector(".message").innerHTML = t("message");
  document.querySelector("a").innerHTML = t("create");

  btn.innerHTML = t("changeLang");
};

i18next.init(
  {
    lng: "en",
    fallbackLng: ["en", "ru"],
    resources: {
      en,
      ru,
    },
  },
  output
);

btn.onclick = () => {
  const lang = i18next.language === "en" ? "ru" : "en";
  i18next.changeLanguage(lang, output);
};
