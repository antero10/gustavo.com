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
