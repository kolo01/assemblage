export interface Property {
  id: number;
  owner: string;
  label: string;
  price: number;
  address: string;
  surface: number;
  property_type: string;
  description: string;
  bedrooms_number: number;
  characteristics: Characteristic[];
}

interface Characteristic {
  id: number;
  swimming_pool: boolean;
  green_space: boolean;
  air_conditioning: boolean;
  nearby_school_or_university: boolean;
  commercial_area: boolean;
  garden: boolean;
  quiet_area: boolean;
  balcony_terrace: boolean;
  gym_room: boolean;
  furnished: boolean;
  furnished_kitchen: boolean;
  city_center: boolean;
  general_condition_new: boolean;
  guardian: boolean;
}
