// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    id: string;
    name: string;
    username: string;
    avatar_url: string;
    login: string;
    html_url: string;
    bio?: string;             
    location: string;        
    followersCount?: number;  
    publicReposCount?: number; 
    company?: string;         
    blog?: string;            
    email: string;           
  }