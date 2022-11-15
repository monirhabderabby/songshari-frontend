export const regAsMember = async data => {
    const url = `https://shanshari-temp.vercel.app/member/register/personalDetail`;
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: data,
    })
        .then(res => res.json())
        .then(data => console.log(data));
};
