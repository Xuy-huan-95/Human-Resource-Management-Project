export interface Login {
  client_secret: string
  grant_type: string
  client_id: string
  username: string
  password: string
}

export interface LoginResponse {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
  scope: string
  organization: string
}
