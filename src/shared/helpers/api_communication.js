export async function guestPostApi(path, content) {
    return await fetch(process.env.REACT_APP_API_URL + path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content),
     });
}

export async function userGetApi(path, content) {
    return await fetch(process.env.REACT_APP_API_URL + path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content),
     });
}