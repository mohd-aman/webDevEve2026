const basePath = 'https://image.tmdb.org/t/p/original'

export const urlToPosterPath = (url)=>{
  return`${basePath}${url}`;
}