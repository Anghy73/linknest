export interface LinkData {
  status: string;
  data: Data;
  statusCode: number;
  redirects: any[];
  headers: Headers;
}

export interface Data {
  lang: string;
  author: null;
  title: string;
  publisher: string;
  image: Image;
  date: Date;
  url: string;
  description: string;
  logo: Image;
}

export interface Image {
  url: string;
  type: string;
  size: number;
  height: number;
  width: number;
  size_pretty: string;
}

export interface Headers {
  "accept-ranges": string;
  "access-control-allow-origin": string;
  age: string;
  "cache-control": string;
  "content-disposition": string;
  "content-encoding": string;
  "content-length": string;
  "content-type": string;
  date: string;
  etag: string;
  "last-modified": string;
  server: string;
  "strict-transport-security": string;
  "x-matched-path": string;
  "x-vercel-cache": string;
  "x-vercel-id": string;
}