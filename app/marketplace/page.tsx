"use client";
import { useState, useEffect } from "react";

const Marketplace = () => {
  return (
    <div>
      <h1>Marketplace</h1>
      <p>This is a work in progress as we navigate through the API.</p>
    </div>
  );
};

export default Marketplace;

/*************
 * Notes
 *************
/heroes/v2/marketplace/market-history
You can check the type of enchantment scroll by searching for "Enchant Scroll" or "Enchant Scroll (Indefinite)" and then selecting prefix_enchant_preset or suffix_enchant_preset in the item details options.



/////////////////////////////////
//	Curl
curl -X 'GET' \
  'https://open.api.nexon.com/heroes/v2/marketplace/market-history?item_name=%25enchant%25&cursor=10' \
  -H 'accept: application/json' \
  -H 'x-nxopen-api-key: test_8449b32d4ef06693600c6e7f1c7cd4dc142b45cd820ca40a71d708cedd0157e5efe8d04e6d233bd35cf2fabdeb93fb0d'
/////////////////////////////////
//	Request URL
https://open.api.nexon.com/heroes/v2/marketplace/market-history?item_name=Enchant Scroll
korean: 인챈트 스크롤
https://open.api.nexon.com/heroes/v2/marketplace/market-history?item_name=%EC%9D%B8%EC%B1%88%ED%8A%B8%20%EC%8A%A4%ED%81%AC%EB%A1%A4
*/
