const Conf = {

    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectid: String(import.meta.env.VITE_PROJECT_ID),
    appwritedatabaseidid: String(import.meta.env.VITE_DAATABASE_ID),
    appwritecollectionid: String(import.meta.env.VITE_COLLECTION_ID),
    appwritebucketid:String(import.meta.env.VITE_BUCKET_ID)
}

export default Conf