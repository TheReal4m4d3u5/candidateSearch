// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    id: string;
    name: string;
    username: string;
    avatar_url: string;
    login: string;
    html_url: string;
    bio?: string;             // Optional
    location?: string;        // Optional
    followersCount?: number;  // Optional
    publicReposCount?: number; // Optional
    company?: string;         // Optional
    blog?: string;            // Optional
    email?: string;           // Optional
  }