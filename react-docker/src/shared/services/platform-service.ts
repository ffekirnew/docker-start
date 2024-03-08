import ApiClient from "./api-client"

export interface Platform {
  id: number
  slug: string
  name: string
}

export default new ApiClient<Platform>("/platforms/lists/parents")
