// Location service for fetching countries, states, cities, and LGAs using Nigeria Data API
import axios from 'axios';

// Base URL and API token for Nigeria Data API
const NIGERIA_DATA_API_BASE = 'https://ngdata.udeh.ng/api';
const API_TOKEN = 'pSEHgrg3PB35P6eQu7C0m6CQpZXRJJnWvDeii2u4aaeca846';

// Types for location data
export interface Country {
  id: number;
  name: string;
  code?: string;
  phone_code?: string;
  capital?: string;
  currency?: string;
  currency_symbol?: string;
  region?: string;
  subregion?: string;
}

export interface State {
  id: number;
  name: string;
  country_id?: number;
  country_code?: string;
  country_name?: string;
  state_code?: string;
  type?: string;
  latitude?: string;
  longitude?: string;
  local_governments?: any[]; // LGAs included in state response
}

export interface City {
  id: number;
  name: string;
  state_id?: number | string; // Can be string from API or number from states
  state_code?: string;
  state_name?: string;
  country_id?: number;
  country_code?: string;
  country_name?: string;
  latitude?: string;
  longitude?: string;
}

export interface LGA {
  id: number;
  name: string;
  state_id?: number | string; // Can be string from API or number from states
  state_name?: string;
  country_id?: number;
  country_code?: string;
  country_name?: string;
}

// API response types
interface ApiResponse<T> {
  data: T[];
  message?: string;
  status?: string;
}

// Location service functions
export const locationService = {
  // Get all countries
  async getCountries(): Promise<Country[]> {
    try {
      const response = await axios.get<ApiResponse<Country>>(`${NIGERIA_DATA_API_BASE}/countries`, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      // Handle the actual API response format: response.data.data.countries.data
      if ((response.data as any)?.data?.countries?.data && Array.isArray((response.data as any).data.countries.data)) {
        return (response.data as any).data.countries.data.map((country: any) => ({
          id: parseInt(country.geoname_id) || 0,
          name: country.name,
          code: country.iso2code,
          phone_code: country.phone_code,
          capital: country.capital,
          currency: country.currency_code,
          currency_symbol: country.currency,
          region: country.continent,
          subregion: country.continent,
        }));
      }
      return [];
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw new Error('Failed to fetch countries');
    }
  },

  // Get all states
  async getStates(): Promise<State[]> {
    try {
      const response = await axios.get<ApiResponse<State>>(`${NIGERIA_DATA_API_BASE}/states`, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      // Handle the actual API response format: response.data.data.states.data
      console.log('States API response structure:', response.data);
      if ((response.data as any)?.data?.states?.data && Array.isArray((response.data as any).data.states.data)) {
        const statesData = (response.data as any).data.states.data.map((state: any) => ({
          id: parseInt(state._id) || 0,
          name: state.name,
          country_code: state.country_code,
          country_name: 'Nigeria',
          state_code: state.geoname_adm1code,
          type: 'state',
          latitude: state.latitude,
          longitude: state.longitude,
          local_governments: state.local_governments || [], // Include LGAs if available
        }));
        console.log('Mapped states data:', statesData);
        return statesData;
      }
      console.log('No states data found in response');
      return [];
    } catch (error) {
      console.error('Error fetching states:', error);
      throw new Error('Failed to fetch states');
    }
  },

  // Get all cities/towns
  async getCities(): Promise<City[]> {
    try {
      const response = await axios.get<ApiResponse<City>>(`${NIGERIA_DATA_API_BASE}/cities-or-towns`, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      // Handle the actual API response format: response.data.data.cities_or_towns.data
      console.log('Cities API response structure:', response.data);
      console.log('Cities data path:', (response.data as any)?.data?.cities_or_towns?.data);
      if ((response.data as any)?.data?.cities_or_towns?.data && Array.isArray((response.data as any).data.cities_or_towns.data)) {
        const citiesData = (response.data as any).data.cities_or_towns.data.map((city: any) => ({
          id: parseInt(city._id) || 0,
          name: city.name,
          state_id: city.state_id, // Keep as string to match API response
          state_name: '', // Will be populated when filtering by state
          country_code: city.country_code,
          country_name: 'Nigeria',
          latitude: city.latitude,
          longitude: city.longitude,
        }));
        console.log('Mapped cities data:', citiesData);
        return citiesData;
      }
      console.log('No cities data found in response');
      return [];
    } catch (error) {
      console.error('Error fetching cities:', error);
      throw new Error('Failed to fetch cities');
    }
  },

  // Get all LGAs
  async getLGAs(): Promise<LGA[]> {
    try {
      const response = await axios.get<ApiResponse<LGA>>(`${NIGERIA_DATA_API_BASE}/local-governments`, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      // Handle the actual API response format: response.data.data.local_governments.data
      console.log('LGAs API response structure:', response.data);
      if ((response.data as any)?.data?.local_governments?.data && Array.isArray((response.data as any).data.local_governments.data)) {
        const lgasData = (response.data as any).data.local_governments.data.map((lga: any) => ({
          id: parseInt(lga._id) || 0,
          name: lga.name,
          state_id: lga.state_id, // Keep as string to match API response
          state_name: '', // Will be populated when filtering
          country_code: lga.country_code,
          country_name: 'Nigeria',
        }));
        console.log('Mapped LGAs data:', lgasData);
        return lgasData;
      }
      console.log('No LGAs data found in response');
      return [];
    } catch (error) {
      console.error('Error fetching LGAs:', error);
      throw new Error('Failed to fetch LGAs');
    }
  },

  // Get cities by state name (filter from all cities)
  async getCitiesByState(stateName: string): Promise<City[]> {
    try {
      const allCities = await this.getCities();
      return allCities.filter(city => 
        city.state_name?.toLowerCase() === stateName.toLowerCase()
      );
    } catch (error) {
      console.error('Error fetching cities by state:', error);
      throw new Error('Failed to fetch cities for the selected state');
    }
  },

  // Get LGAs by state name (filter from all LGAs)
  async getLGAsByState(stateName: string): Promise<LGA[]> {
    try {
      const allLGAs = await this.getLGAs();
      return allLGAs.filter(lga => 
        lga.state_name?.toLowerCase() === stateName.toLowerCase()
      );
    } catch (error) {
      console.error('Error fetching LGAs by state:', error);
      throw new Error('Failed to fetch LGAs for the selected state');
    }
  },

  // Extract LGAs from states response (more efficient)
  extractLGAsFromStates(states: State[]): LGA[] {
    console.log('Extracting LGAs from states:', states);
    const allLGAs: LGA[] = [];
    states.forEach((state: any) => {
      console.log('Processing state:', state.name, 'with LGAs:', state.local_governments);
      if (state.local_governments && Array.isArray(state.local_governments)) {
        state.local_governments.forEach((lga: any) => {
          allLGAs.push({
            id: lga.id,
            name: lga.name,
            state_id: parseInt(state._id) || 0,
            state_name: state.name,
            country_code: 'NG',
            country_name: 'Nigeria',
          });
        });
      }
    });
    console.log('Extracted all LGAs:', allLGAs);
    return allLGAs;
  },
};

// Fallback data for when APIs are not available
export const fallbackData = {
  countries: [
    { id: 1, name: 'Nigeria', code: 'NG', phone_code: '+234', capital: 'Abuja', currency: 'NGN', currency_symbol: '₦', region: 'Africa', subregion: 'Western Africa' },
    { id: 2, name: 'Ghana', code: 'GH', phone_code: '+233', capital: 'Accra', currency: 'GHS', currency_symbol: '₵', region: 'Africa', subregion: 'Western Africa' },
    { id: 3, name: 'Kenya', code: 'KE', phone_code: '+254', capital: 'Nairobi', currency: 'KES', currency_symbol: 'KSh', region: 'Africa', subregion: 'Eastern Africa' },
    { id: 4, name: 'South Africa', code: 'ZA', phone_code: '+27', capital: 'Cape Town', currency: 'ZAR', currency_symbol: 'R', region: 'Africa', subregion: 'Southern Africa' },
  ],
  states: [
    { id: 1, name: 'Lagos', state_code: 'LA', country_name: 'Nigeria' },
    { id: 2, name: 'Abuja', state_code: 'FC', country_name: 'Nigeria' },
    { id: 3, name: 'Kano', state_code: 'KN', country_name: 'Nigeria' },
    { id: 4, name: 'Rivers', state_code: 'RI', country_name: 'Nigeria' },
    { id: 5, name: 'Ogun', state_code: 'OG', country_name: 'Nigeria' },
    { id: 6, name: 'Kaduna', state_code: 'KD', country_name: 'Nigeria' },
    { id: 7, name: 'Oyo', state_code: 'OY', country_name: 'Nigeria' },
    { id: 8, name: 'Edo', state_code: 'ED', country_name: 'Nigeria' },
  ],
  cities: [
    { id: 1, name: 'Lagos', state_name: 'Lagos', country_name: 'Nigeria' },
    { id: 2, name: 'Ikeja', state_name: 'Lagos', country_name: 'Nigeria' },
    { id: 3, name: 'Victoria Island', state_name: 'Lagos', country_name: 'Nigeria' },
    { id: 4, name: 'Surulere', state_name: 'Lagos', country_name: 'Nigeria' },
    { id: 5, name: 'Abuja', state_name: 'Abuja', country_name: 'Nigeria' },
    { id: 6, name: 'Kano', state_name: 'Kano', country_name: 'Nigeria' },
    { id: 7, name: 'Port Harcourt', state_name: 'Rivers', country_name: 'Nigeria' },
    { id: 8, name: 'Abeokuta', state_name: 'Ogun', country_name: 'Nigeria' },
  ],
  lgas: [
    { id: 1, name: 'Ikeja', state_name: 'Lagos', country_name: 'Nigeria' },
    { id: 2, name: 'Victoria Island', state_name: 'Lagos', country_name: 'Nigeria' },
    { id: 3, name: 'Surulere', state_name: 'Lagos', country_name: 'Nigeria' },
    { id: 4, name: 'Lekki', state_name: 'Lagos', country_name: 'Nigeria' },
    { id: 5, name: 'Abaji', state_name: 'Abuja', country_name: 'Nigeria' },
    { id: 6, name: 'Bwari', state_name: 'Abuja', country_name: 'Nigeria' },
    { id: 7, name: 'Gwagwalada', state_name: 'Abuja', country_name: 'Nigeria' },
    { id: 8, name: 'Kuje', state_name: 'Abuja', country_name: 'Nigeria' },
    { id: 9, name: 'Kwali', state_name: 'Abuja', country_name: 'Nigeria' },
    { id: 10, name: 'Municipal Area Council', state_name: 'Abuja', country_name: 'Nigeria' },
  ],
};
