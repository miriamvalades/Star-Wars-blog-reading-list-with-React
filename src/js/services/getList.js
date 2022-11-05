export const getlist = async (type) => {
    const response = await fetch(`https://www.swapi.tech/api/${type}/`)
    const responsejson = await response.json();
    return responsejson.results;
}