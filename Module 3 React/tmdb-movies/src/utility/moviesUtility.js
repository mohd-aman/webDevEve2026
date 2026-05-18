const basePath = 'https://image.tmdb.org/t/p/original'
const localStorageKey = "watchList";

export const urlToPosterPath = (url)=>{
  return`${basePath}${url}`;
}

export const updateLocalStorageWatchList = (list)=>{
  localStorage.setItem(localStorageKey,JSON.stringify(list));
}

export const getWatchListFromLocalStorage = ()=>{
  const watchList = localStorage.getItem(localStorageKey);
  if(watchList){
    return JSON.parse(watchList);
  }
  return [];
}