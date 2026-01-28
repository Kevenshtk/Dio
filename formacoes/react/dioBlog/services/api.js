import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://zkhtllxiifyotiofcluy.supabase.co/rest/v1',
    headers: {
        apikey: "sb_secret_h2j4krodoOho5mRQDczpgA_SjeTMjdq",
        authorization: "Bearer sb_secret_h2j4krodoOho5mRQDczpgA_SjeTMjdq"
    }
})