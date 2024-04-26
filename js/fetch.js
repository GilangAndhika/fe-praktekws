import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-gilang2024-1716ba1b2ba6.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}