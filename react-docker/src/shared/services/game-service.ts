import ApiClient from './api-client'
import { Genre } from './genre-service';
import { Platform } from './platform-service'

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[]
  metacritic: number;
}

export interface Ordering {
  value: string;
  label: string;
}

export const orderingFields: Ordering[] = [
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Released Date' },
  { value: '-added', label: 'Added Date' },
  { value: '-created', label: 'Created date' },
  { value: '-updated', label: 'Updated date' },
  { value: 'rating', label: 'Rating' },
  { value: 'metacritic', label: 'Critics' }
]

export default new ApiClient<Game>("/games")
