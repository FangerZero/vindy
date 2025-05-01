export type CharacterType = {
  character_name: string;
  character_date_create: Date;
  character_date_last_login: Date;
  character_date_last_logout: Date;
  character_class_name: string;
  character_gender: "M" | "F";
  character_exp: number;
  character_level: number;
  cairde_name: string;
  title_count: number;
  id_title_count: number;
  total_title_count: number;
  title_stat: {
    stat_name: string;
    stat_value: number;
  }[];
  skill_awakening: any[]; // Assuming this is an empty array or could have specific types
  dress_point: {
    total_point: number;
    avatar_point: number;
    back_point: number;
    tail_point: number;
    object_point: number;
  };
};
