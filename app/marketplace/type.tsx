export type MarketplaceType = {
  next_cursor: "string";
  item: [
    {
      date_update: Date;
      item_name: "string";
      average_price: number;
      min_price: number;
      max_price: number;
      item_option: {
        enhancement_level: number;
        tuning_stat: [
          {
            stat_name: "string";
            stat_value: "string";
          },
        ];
        ability_name: "string";
        prefix_enchant_preset_1: "string";
        suffix_enchant_preset_1: "string";
        prefix_enchant_preset_2: "string";
        suffix_enchant_preset_2: "string";
        power_infusion_preset_1: [
          {
            stat_name: "string";
            stat_value: "string";
          },
        ];
        power_infusion_preset_2: [
          {
            stat_name: "string";
            stat_value: "string";
          },
        ];
        bind_release_limit: Date;
        item_shape_name: "string";
        item_quality: "string";
        bracelet_gem_composite: [
          {
            item_name: "string";
            stat: [
              {
                stat_name: "string";
                stat_value: "string";
              },
            ];
          },
        ];
        value: "string";
      };
    },
  ];
};
