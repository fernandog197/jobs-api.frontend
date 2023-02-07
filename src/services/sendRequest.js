import axios from 'axios'

export const sendRequest = async ({ url, method, body }) => {
    try {
        const data = await axios({
            url,
            method,
            data: body
        })

        return data
    } catch (err) {
        console.log(err)
    }
}

export const sendAuthRequest = async ({ url, method, body, token }) => {
    try {
        const data = await axios({
            url,
            method,
            data: body,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return data
    } catch (err) {
        console.log(err)
    }
}