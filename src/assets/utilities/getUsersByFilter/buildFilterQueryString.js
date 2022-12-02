export const buildFilterQueryString = filter => {
    let queryString = "";

    if (filter.age !== []) {
        queryString += `minAge=${filter.age[0]}&maxAge=${filter.age[1]}`;
    }
    if (filter.lookingFor !== "") {
        queryString += `&lookingFor=${filter.lookingFor}`;
    }
    if (filter.for !== "") {
        queryString += `&for=${filter.for}`;
    }
    if (filter.profession !== "") {
        queryString += `&profession=${filter.profession}`;
    }
    if (filter.religion !== "") {
        queryString += `&religion=${filter.religion}`;
    }
    if (filter.homeTown !== "") {
        queryString += `&homeTown=${filter.homeTown}`;
    }
    if (filter.currentLocation !== "") {
        queryString += `&currentLocation=${filter.currentLocation}`;
    }
    if (filter.education !== "") {
        queryString += `&education=${filter.education}`;
    }

    return queryString;
};
