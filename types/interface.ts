export interface IRocketResponse {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  payload_weights: any[];
  first_stage: {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
  };
  second_stage: {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust: {
      kN: number;
      lbf: number;
    };
    payloads: {
      option_1: string;
      composite_fairing: {
        height: {
          meters: number;
          feet: number;
        };
        diameter: {
          meters: number;
          feet: number;
        };
      };
    };
  };
  engines: {
    number: number;
    type: string;
    version: string;
    layout: string;
    isp: {
      sea_level: number;
      vacuum: number;
    };
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    thrust_to_weight: number;
  };
  landing_legs: {
    number: number;
    material: any;
  };
  flickr_images: string[];
  wikipedia: string;
  description: string;
}

export interface IShipResponse {
  id: string;
  name: string;
  legacy_id?: string | null;
  model?: string | null;
  type?: string | null;
  roles: string[];
  active: boolean;
  imo?: number | null;
  mmsi?: number | null;
  abs?: number | null;
  class?: number | null;
  mass_kg?: number | null;
  mass_lbs?: number | null;
  year_built?: number | null;
  home_port?: string | null;
  status?: string | null;
  speed_kn?: number | null;
  course_deg?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  last_ais_update?: string | null;
  link?: string | null;
  image?: string | null;
  launches: string[]; // Assuming `ObjectId` is a string type identifier
}
