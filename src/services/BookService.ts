import ZohoServices from "./ZohoServices";

export class BooksService extends ZohoServices{

    private baseUrl = ""

    async get( resource:string|Array<string>, id:string='', page:number=1 ): Promise<ZohoResource> {
        const organizationId = process.env.ORGANIZATION_ID
        const tokenResponse = await this.getToken()
        if( tokenResponse.error ){
            return {
                error: true,
                data: null,
                message: 'Token no generado'
            }
        }
        const accessToken = tokenResponse.data;

        const nameResource = typeof resource === 'string' ? resource : resource[0]
        const keyResource = typeof resource === 'string' ? resource : ( id==='' ? resource[1] : resource[0] )

        const url = id==='' ? `${this.baseUrl}/${nameResource}/${id}?organization_id=${organizationId}` : `${this.baseUrl}/${nameResource}?organization_id=${organizationId}&page=${page}`;

        const headers = new Headers()
        headers.set('Authorization', `Zoho-oauthtoken ${accessToken}`)
        const response = await fetch(url, {
            headers
        })
        const data = await response.json()
        const error = data?.code!==0

        return {
            error,
            data: !error ? data[keyResource] : null,
            message: !error ? 'Success' : JSON.stringify( data )
        }
    }
}