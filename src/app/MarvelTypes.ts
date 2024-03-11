export interface MarvelApiRespose{
    data: MarvelData,
}

export interface MarvelData{
    results: MarvelCharacter[],
}

export interface MarvelCharacter{
    id: string,
    name: string,
    description: string,
    thumbnail: Thumbnail
}


export interface Thumbnail{
    path:string,
    extension: string
}