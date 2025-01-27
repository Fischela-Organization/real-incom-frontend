import axios from "axios"

const baseURi = "https://ipfs.io/ipfs/"

const extractFolderIdMashURI = (uri: string) => {

    return `${baseURi}${uri.split("//")[1]}` 
}


export const fetchImage = async (metadataURI: string) => {
    const fullURI = extractFolderIdMashURI(metadataURI)
    const metadata: any = await axios.get(fullURI)

    return extractFolderIdMashURI(metadata.data.image)
}

export const fetchDocument = async (metadataURI: string) => {
    const fullURI = extractFolderIdMashURI(metadataURI)
    const metadata: any = await axios.get(fullURI)

    return extractFolderIdMashURI(metadata.data.docFile)
}