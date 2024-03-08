import ApiClient from './api-client'

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export default new ApiClient<Genre>("/genres")
