const getCountry =async() =>{
    try {
        const response = await fetch('https://api.ipregistry.co/?key=8lj16kdy2vgpp3xo')
        const data = await response.json()
        return(data.location.country.name);
    } catch (error) {
        console.error(error);
    }
}

export default getCountry
// no va elegir nosotros 