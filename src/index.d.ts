interface ZohoResponse {
    error: boolean,
    data: string | null,
    message: string
}

interface ZohoResource {
    error: boolean,
    data: Array<any> | Object | null,
    message: string
}