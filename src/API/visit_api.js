import axios from "axios";
export const visitInstance = axios.create({
  baseURL: `https://tdx.transportdata.tw/api/basic/v2/Tourism/`,
  // headers: {
  //   Accept: "application/json",
  //   Authorization:
  //     "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJER2lKNFE5bFg4WldFajlNNEE2amFVNm9JOGJVQ3RYWGV6OFdZVzh3ZkhrIn0.eyJleHAiOjE2NTgyOTc3MzcsImlhdCI6MTY1ODIxMTMzNywianRpIjoiYTg5OWQwYTUtNTc1Ni00Nzg2LWIyOTMtY2FjMGU1ZmM4MzQyIiwiaXNzIjoiaHR0cHM6Ly90ZHgudHJhbnNwb3J0ZGF0YS50dy9hdXRoL3JlYWxtcy9URFhDb25uZWN0Iiwic3ViIjoiM2EwZDExZDktYTM2OS00ZTM4LTkzOWEtYjMyYmQ3MGM0ZGIxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoieGk0ODY5LTllYzY2NDBkLTIzODItNGVhNyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsic3RhdGlzdGljIiwicHJlbWl1bSIsIm1hYXMiLCJhZHZhbmNlZCIsImhpc3RvcmljYWwiLCJiYXNpYyJdfSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwidXNlciI6IjdmZTBlMmUzIn0.UqVppEhDGcjbkUl14epTEhWO8frRxxAT4IsS8eWs8tBJy5m6hWRLmP-2SX6xwYlUbxoL2qeAKFnFk5EI94r0pr2ZHPciWdn54sLwvZARsKiKMaaIyU6asGd8RcNu-9kMksQ6Ezia-DyelRKdFFRAYiA38KeotA3WII44ml4Fywbkytqr92J-panYfPzNll8lmAgwYWatJyec2Z0p4SkBU1ZN_PrbndvNwd5c1MHa5dQJZSWG1j-WdzWC05nbh3VcgZcHicGZ66w1Tsg704UTT3W_CKKg0WqMJC7J6kTvbiJCjUKOIWSmf2gnRYFRq24X7kMciiL3nBRC1_qDaTW-GQ",
  // },
});

// const config = {
//   method: "get",
// };

// export const fetchVisitPoint = async (params = "") => {
//   try {
//     return await axios.get(
//       `
//     ?%24format=JSON${params}
//     `,
//       config
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
