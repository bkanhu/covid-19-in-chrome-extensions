console.log("hello");

const data = "https://api.rootnet.in/covid19-in/stats/latest";
const lastUpdated = document.querySelector(".last_updated");

fetch(data)
  .then((response) => response.json())
  .then((data) => {
    const obj = Object.values(data.data.summary);
    const refreshed = data.lastOriginUpdate;
    const refreshedDate = new Date(refreshed).toLocaleString();
    document.querySelector(".last_updated").textContent = refreshedDate;
    const [
      confirmed,
      _confirmedIndian,
      _confirmedForeign,
      discharged,
      deaths,
    ] = obj;
    console.log("confirmed : " + confirmed);
    console.log("discharged : " + discharged);
    console.log("deaths : " + deaths);
    console.log("total : " + (confirmed + discharged + deaths));
    console.log("last updated : " + refreshedDate);
      document.querySelector(".confirmed .number").textContent = confirmed.toLocaleString();
      document.querySelector(".active .number").textContent = (confirmed - discharged).toLocaleString();
      document.querySelector(".recovered .number").textContent = discharged.toLocaleString();
      document.querySelector(".deceased .number").textContent = deaths.toLocaleString();
    }
  );