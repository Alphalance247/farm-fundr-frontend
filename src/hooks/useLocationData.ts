import { useState, useEffect, useCallback } from 'react';
import { 
  locationService, 
  fallbackData,
  type Country, 
  type State, 
  type City, 
  type LGA 
} from '@/services/locationService';

interface UseLocationDataReturn {
  countries: Country[];
  states: State[];
  cities: City[];
  lgas: LGA[];
  filteredCities: City[];
  filteredLGAs: LGA[];
  loading: {
    countries: boolean;
    states: boolean;
    cities: boolean;
    lgas: boolean;
  };
  error: string | null;
  fetchCitiesByState: (stateName: string) => Promise<void>;
  fetchLGAsByState: (stateName: string) => Promise<void>;
  clearFilteredData: () => void;
}

export const useLocationData = (): UseLocationDataReturn => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [lgas, setLGAs] = useState<LGA[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [filteredLGAs, setFilteredLGAs] = useState<LGA[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const [loading, setLoading] = useState({
    countries: false,
    states: false,
    cities: false,
    lgas: false,
  });

  // Fetch all data on mount
  useEffect(() => {
    const fetchAllData = async () => {
      // Fetch countries
      setLoading(prev => ({ ...prev, countries: true }));
      try {
        const countriesData = await locationService.getCountries();
        setCountries(Array.isArray(countriesData) ? countriesData : []);
      } catch (err) {
        console.warn('Using fallback countries data');
        setCountries(fallbackData.countries);
        setError('Using offline data for countries');
      } finally {
        setLoading(prev => ({ ...prev, countries: false }));
      }

      // Fetch states
      setLoading(prev => ({ ...prev, states: true }));
      try {
        const statesData = await locationService.getStates();
        setStates(Array.isArray(statesData) ? statesData : []);
        
        // LGAs will be fetched separately since states response doesn't include them
      } catch (err) {
        console.warn('Using fallback states data');
        setStates(fallbackData.states);
        setError('Using offline data for states');
      } finally {
        setLoading(prev => ({ ...prev, states: false }));
      }

      // Fetch cities
      setLoading(prev => ({ ...prev, cities: true }));
      try {
        const citiesData = await locationService.getCities();
        console.log('Cities data received:', citiesData);
        setCities(Array.isArray(citiesData) ? citiesData : []);
      } catch (err) {
        console.warn('Using fallback cities data');
        setCities(fallbackData.cities);
        setError('Using offline data for cities');
      } finally {
        setLoading(prev => ({ ...prev, cities: false }));
      }

      // Fetch LGAs separately
      setLoading(prev => ({ ...prev, lgas: true }));
      try {
        const lgasData = await locationService.getLGAs();
        console.log('LGAs data received:', lgasData);
        setLGAs(Array.isArray(lgasData) ? lgasData : []);
      } catch (err) {
        console.warn('Using fallback LGAs data');
        setLGAs(fallbackData.lgas);
        setError('Using offline data for LGAs');
      } finally {
        setLoading(prev => ({ ...prev, lgas: false }));
      }
    };

    fetchAllData();
  }, []);

  const fetchCitiesByState = useCallback(async (stateName: string) => {
    console.log('fetchCitiesByState called with:', stateName);
    console.log('Available states:', states);
    console.log('Available cities:', cities);
    
    if (!stateName) {
      setFilteredCities([]);
      return;
    }
    
    try {
      // Find the state by name to get its ID
      const selectedState = states.find(state => 
        state.name.toLowerCase() === stateName.toLowerCase()
      );
      
      console.log('Selected state:', selectedState);
      
      if (selectedState) {
        // Convert both to strings for comparison since cities have string state_id
        const filteredCitiesData = cities.filter(city => 
          String(city.state_id) === String(selectedState.id)
        );
        console.log('Filtered cities:', filteredCitiesData);
        setFilteredCities(filteredCitiesData);
      } else {
        console.log('No state found with name:', stateName);
        setFilteredCities([]);
      }
    } catch (err) {
      console.error('Error filtering cities by state:', err);
      setFilteredCities([]);
    }
  }, [cities, states]);

  const fetchLGAsByState = useCallback(async (stateName: string) => {
    console.log('fetchLGAsByState called with:', stateName);
    console.log('Available LGAs:', lgas);
    
    if (!stateName) {
      setFilteredLGAs([]);
      return;
    }
    
    try {
      // Find the state by name to get its ID
      const selectedState = states.find(state => 
        state.name.toLowerCase() === stateName.toLowerCase()
      );
      
      console.log('Selected state for LGAs:', selectedState);
      
      if (selectedState) {
        // Convert both to strings for comparison since LGAs have string state_id
        const filteredLGAsData = lgas.filter(lga => 
          String(lga.state_id) === String(selectedState.id)
        );
        console.log('Filtered LGAs:', filteredLGAsData);
        setFilteredLGAs(filteredLGAsData);
      } else {
        console.log('No state found for LGAs with name:', stateName);
        setFilteredLGAs([]);
      }
    } catch (err) {
      console.error('Error filtering LGAs by state:', err);
      setFilteredLGAs([]);
    }
  }, [lgas, states]);

  const clearFilteredData = useCallback(() => {
    setFilteredCities([]);
    setFilteredLGAs([]);
  }, []);

  return {
    countries,
    states,
    cities,
    lgas,
    filteredCities,
    filteredLGAs,
    loading,
    error,
    fetchCitiesByState,
    fetchLGAsByState,
    clearFilteredData,
  };
};
