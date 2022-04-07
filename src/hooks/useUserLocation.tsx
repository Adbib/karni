// import { useEffect } from "react";
const getUserData = async (
  site: string = "https://json.geoiplookup.io/"
): Promise<any> => {
  let getInfo: Response;
  let infoToJSON: any;
  try {
    getInfo = await fetch(site);
    infoToJSON = await getInfo.json();
  } catch (error) {
    getInfo = await getUserData("http://ip-api.com/json");
    infoToJSON = await getInfo.json();
  }
  return infoToJSON;
};

export default async function useUserLocation() {
  const getCache: string | Storage | any = localStorage.getItem("userLocation");
  let cache = JSON.parse(getCache);
  const setUserLocation = (location: Object) => {
    cache = localStorage.setItem("userLocation", JSON.stringify(location));
    return JSON.parse(cache);
  };

  if (cache) {
    return [cache, setUserLocation];
  } else {
    const data = await getUserData();
    cache = localStorage.setItem("userLocation", JSON.stringify(data));
  }
  return [cache, setUserLocation];
}
