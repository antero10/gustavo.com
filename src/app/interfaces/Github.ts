export interface Github {
  description: string;
  full_name: string;
  language: string;
  license: GithubLicense;
  svn_url: string;
}

export interface GithubLicense {
  key: string;
  name: string;
}

export interface GithubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  location: string;
  blog: string;
  name: string;
  bio: string
}
