import { get, post, del, put } from "apis/httpclient";

export interface loginResp {
    username: string
    name: string
    setor: {
      id: number
      name: string
    }
}

export function login(username: string, password: string){
    return post("/api/login", {
        username,
        password
    }) as Promise<loginResp>;
}
