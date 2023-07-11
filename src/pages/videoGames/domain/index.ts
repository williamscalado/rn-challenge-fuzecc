export interface IVideoGame {
  current_version?: string;
  id: number;
  leagues: League[];
  name: string;
  slug: string;
}

export interface League {
  id: number;
  image_url?: string;
  modified_at: string;
  name: string;
  series: Series[];
  slug: string;
  url?: string;
}

export interface Series {
  begin_at: string;
  end_at?: string;
  full_name: string;
  id: number;
  league_id: number;
  modified_at: string;
  name?: string;
  season?: string;
  slug: string;
  winner_id?: number;
  winner_type?: string;
  year: number;
}
