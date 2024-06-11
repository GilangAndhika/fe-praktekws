//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = " https://ws-gilang2024-1716ba1b2ba6.herokuapp.com/presensi/" + presensiId;