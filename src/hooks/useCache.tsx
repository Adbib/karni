import React from "react";

type Props = {
  clicked?: any;
  data?: any;
};

export default function useCache({ clicked }: Props) {
  let cached: any = localStorage.getItem("yadbib.me");
  const setCache = (d: any) => {
    const bla = JSON.stringify(d);
    localStorage.setItem("yadbib.me", bla);
    cached = localStorage.getItem("yadbib.me");
    const jsn = JSON.parse(cached);
    return jsn;
  };
  if (cached) {
    const jsn = JSON.parse(cached);
    return [jsn, setCache];
  } else {
    const bla = setCache(clicked);
    return [bla, setCache];
  }
}
