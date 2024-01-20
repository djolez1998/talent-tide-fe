import axiosInstance from "../axiosClient"

const login = (credentials: any) => {

    axiosInstance.post('/login', credentials).then((res) => console.log(res))
}

export { login }