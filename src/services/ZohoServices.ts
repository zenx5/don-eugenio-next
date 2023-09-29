

export default class ZohoServices {

    async GenerateCode(code:string):Promise<ZohoResponse> {
        const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
            method:'post',
            body:JSON.stringify({
                grant_type : "authorization_code",
                client_id : process.env.CLIENT_ID,
                client_secret : process.env.CLIENT_SECRECT,
                code
            })
        })

        const data = await response.json()
        const error = data?.refresh_token===undefined

        return {
            error,
            data: !error ? data?.refresh_token as string : null,
            message: !error ? "Success" : JSON.stringify( data )
        }
    }

    async RefreshToken( token:string):Promise<ZohoResponse> {
        const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
            method:'post',
            body:JSON.stringify({
                grant_type : "refresh_token",
                client_id : process.env.CLIENT_ID,
                client_secret : process.env.CLIENT_SECRECT,
                refresh_token : token
            })
        })

        const data = await response.json()
        const error = data?.access_token===undefined

        return {
            error,
            data: !error ? data?.access_token : null,
            message: !error ? "Success" : JSON.stringify( data )
        }
    }

    async getToken():Promise<ZohoResponse> {

        return {
            error: true,
            data: null,
            message: "Error"
        }
    }

}