import axios from "axios"; // Axios本体をインポート

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}); // Axiosインスタンスを生成

export default instance;