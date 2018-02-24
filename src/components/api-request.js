export const APIRequest = (url,method) => {
    let cakes;
    let error;
    let response = fetch(url,{
        method: method
    })
    .then(res => res.json())
    .then(json => json)
    .catch(err => err);
    console.log(response);
    return response
}
