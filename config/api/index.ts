import { AxiosRequestConfig } from 'axios';

interface CallAPIProps extends AxiosRequestConfig {
  url?: string;
  method?: string;
  data?: FormData;
  token?: string;
  isToken?: boolean;
  serverToken?: string;
  contentType?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  isToken,
  serverToken,
  contentType,
}: CallAPIProps) {
    let headers = {};
    if(serverToken){
        headers = {
            Authorization: `Bearer ${serverToken}`,
        }
    }
}
