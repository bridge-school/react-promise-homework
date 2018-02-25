export const APIRequest = (baseUrl,query,method) => {
    return fetch((baseUrl + query),{
        method: method
    });
};
