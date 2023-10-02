import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsApiService {

  private urlMercureApi = "https://api.le-systeme-solaire.net/rest/bodies/mercure";
  private urlVenusApi = "https://api.le-systeme-solaire.net/rest/bodies/venus";
  private urlEarthApi = "https://api.le-systeme-solaire.net/rest/bodies/terre";
  private urlMarsApi = "https://api.le-systeme-solaire.net/rest/bodies/mars";
  private urlJupiterApi = "https://api.le-systeme-solaire.net/rest/bodies/jupiter";
  private urlSaturneApi = "https://api.le-systeme-solaire.net/rest/bodies/saturne";
  private urlUranusApi = "https://api.le-systeme-solaire.net/rest/bodies/uranus";
  private urlNeptuneApi = "https://api.le-systeme-solaire.net/rest/bodies/neptune";

  constructor(private http: HttpClient) { }
  
    public getMercure(): Observable<any> {
      return this.http.get<any>(this.urlMercureApi);
    }

    public getVenus(): Observable<any> {
      return this.http.get<any>(this.urlVenusApi);
    }

    public getEarth(): Observable<any> {
      return this.http.get<any>(this.urlEarthApi);
    }

    public getMars(): Observable<any> {
      return this.http.get<any>(this.urlMarsApi);
    }

    public getJupiter(): Observable<any> {
      return this.http.get<any>(this.urlJupiterApi);
    }

    public getSaturne(): Observable<any> {
      return this.http.get<any>(this.urlSaturneApi);
    }

    public getUranus(): Observable<any> {
      return this.http.get<any>(this.urlUranusApi);
    }

    public getNeptune(): Observable<any> {
      return this.http.get<any>(this.urlNeptuneApi);
    }

}
