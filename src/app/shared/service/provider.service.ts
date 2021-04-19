import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  providerUrl='http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getProvider() {
    return this.httpClient.get<{message:string,providers:any}>(`${this.providerUrl}/allStadium`);
  }
 

  addProvider(provider: any) {
    console.log('porovider service' , provider);

    return this.httpClient.post(`${this.providerUrl}/provider/post`, provider);
  }
}
