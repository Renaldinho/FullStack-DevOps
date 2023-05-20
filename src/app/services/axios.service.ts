import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  baseURL: string = 'https://us-central1-fullstack-99235.cloudfunctions.net/app'

  constructor() { }

  async updateServiceData(uid, serviceData) {
    try {
      const url = `${this.baseURL}/updateServiceData`;
      const body = { uid, serviceData };
      const response = await axios.put(url, body);

      // Return response data (if necessary)
      return response.data;
    } catch (error) {
      console.error(`Error updating service data: `, error);
      throw error;
    }
  }
}
