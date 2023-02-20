export const generateQueryUrl = (params: any) => {
  const url = new URL(location.href);
  for (let key in params) {
    const param = params[key];
    url.searchParams.set(key, param);
  }

  const keyword = params['keyword'];
  if (keyword && keyword.length == 0) {
    url.searchParams.delete('type');
    url.searchParams.delete('keyword');
  } else if (keyword && keyword.length > 0) {
    url.searchParams.set('page', '1');
  }
  // console.log(url.toString());
  location.href = url.toString();
}

export const changeRoute = (url: string) => {
  location.href = url;
}