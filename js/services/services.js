const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

async function getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Не можем получить данные с ${url}, статус: ${res.status}`);
    }

    return await res.json();
};

export {postData};
export {getResource};