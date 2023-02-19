export const generateQueryUrl = (params: any) => {
  const url = new URL(location.href);
  const basepath = url.pathname;
  for(let key in params) {
    const param = params[key];
    url.searchParams.set(key, param);
  }
  console.log(url.toString());
}

export const routeChange = (url: string) => {
  location.href = url;
}