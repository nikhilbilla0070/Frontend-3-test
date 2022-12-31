let Ip = document.getElementById("ip");

const getIpAdress = async () => {
  const response = await fetch("https://api.ipify.org/?format=json");
  const ipdata = await response.json();

  Ip.textContent = ipdata.ip;
};
getIpAdress();
// const getData = async () => {
//   const response1 = await fetch(" https://ipinfo.io/157.48.80.29/geo");
//   const data = await response1.json();
//   console.log(data.city);
// };
// url = " https://ipinfo.io/157.48.80.29/geo";
// console.log(Ipaddress);
// Ipaddress = ipdata.ip;
// console.log(Ipaddress);
// const getData = async () => {
//   // document.getElementById("btn").style.display = "none";
//   // document.getElementById("data-container").style.display = "block";
//   const response1 = await fetch( return response.json(););
//   const data = await response1.json();
//   console.log(Ipaddress);
// };
function getData() {
  document.getElementById("btn").style.display = "none";
  document.getElementById("data-container").style.display = "block";
  // const Details = async () => {
  //   const response1 = await fetch(" https://ipinfo.io/157.48.80.29/geo");
  //   const data = await response1.json();
  //   console.log(data.city);
  // };
  // Details();

  fetch("https://ipinfo.io/157.48.80.29?token=39c73c9a70a157")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.loc);
      console.log(data.loc.substring(0, 7));
      let latitude = data.loc.substring(0, 7);
      let longitude = data.loc.substring(8, 15);
      document.getElementById("latitude").textContent = latitude;
      document.getElementById("longitude").textContent = longitude;
      document.getElementById("city").textContent = data.city;
      document.getElementById("region").textContent = data.region;
      document.getElementById("organisation").textContent = data.org;
      document.getElementById("timezone").textContent = data.timezone;
      document.getElementById("time").textContent = "";
      document.getElementById("pincode").textContent = data.postal;
      document.getElementById("message").textContent = "";
    });
}
