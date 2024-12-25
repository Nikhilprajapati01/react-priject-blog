import Conf from "../conf.js";


import { Client, ID, Databases, Storage, Query } from "appwrite";
  export class Service{

    Client = new Client();
    databases;
    bucker;

    constructor(){
        this.Client
         .setEndpoint(Conf.appwriteUrl) 
         .setProject(Confappwriteprojectid);
         this.databases = new Databases(this.Client);
         this.bucker = new Storage(this.Client); 
    }

    async createPost({title,slog, content, featuredImage, status, userid}){
        try {
            return await this.databases.createDocument(
                           )
        } catch (error) {
            console.log("Appwrite service :: creaatepost :: error");
            
        }
    }
  }

  const Service = new Service()
   export default Service