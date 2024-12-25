import Conf from "../conf.js";

import { Client, Account, ID } from "appwrite";


 export  class AuthService {
 Client = new Client();
 account;


 constructor(){
    this.Client
    .setEndpoint(Conf.appwriteUrl) 
    .setProject(Confappwriteprojectid);        
    
    this.account = new Account(this.Client)

 }

 async CreateAccount ({email, password, name}){
    try {
         const UserAccount  = await this.account(ID.unique(), email, password , name);
         if (UserAccount) {
            // call another methods
            this.login(email, password)
            
         } else {
            return UserAccount
         }
    } catch (error) {
        throw error
    }
 }


 async login ({email , password}){
    try {
         return await this.account(email,password)
    } catch (error) {
         throw error
    }
 }


 async getCurrentUser(){
   try {
      return await this.account.get();
   } catch (error) {
      throw(error)
      
   }
   return null;
 }

 async logout(){
   try {
        await this.account.deleteSessions();
   } catch (error) {
      throw (error);
      
   }
 }
}

const AuthService = new AuthService();

export default AuthService