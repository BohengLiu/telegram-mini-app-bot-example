export interface GameStatus {
  round: number;
  init_pool_balance: number;
  end_pool_balance: number;
  is_liquidating: boolean;
  liquidation_time: string;
  has_liquidated: boolean;
}

export interface Grass {
  id: number;
  energy: number;
  owner: number;
  is_burned: boolean;
  created_at: string;
  updated_at: string;
}

export interface Sheep {
  id: number;
  energy: number;
  owner: number;
  is_burned: boolean;
  created_at: string;
  updated_at: string;
}

export interface Wolf {
  id: number;
  energy: number;
  owner: number;
  is_burned: boolean;
  created_at: string;
  updated_at: string;
}

export interface Asset {
  balance: number;
  grass: Grass[] | null;
  sheep: Sheep[] | null;
  wolf: Wolf[] | null;
}
