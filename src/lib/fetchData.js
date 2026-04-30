 
 export const getAnimalsData =async()=>{
    const res = await fetch("https://qurbani-hat-henna.vercel.app/data.json");
    const animals = await res.json();
    return animals;
 }