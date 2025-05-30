"use client";
import { useState, useEffect } from "react";
import { CharacterType } from "./type";
import TestObj from "./test.json";
import koreanToEnglish from "./k2e.json";

const Character = () => {
  const [char_UID, setChar_UID] = useState("");
  const [char_info, setChar_info] = useState<CharacterType>(
    {} as CharacterType,
  );
  const [englishInfo, setEnglishInfo] = useState<CharacterType>(
    {} as CharacterType,
  );
  const apiKey =
    "test_8449b32d4ef06693600c6e7f1c7cd4dc142b45cd820ca40a71d708cedd0157e5efe8d04e6d233bd35cf2fabdeb93fb0d";
  const baseURL = "https://open.api.nexon.com/heroes/v2/";

  console.log("APIKey: ", apiKey);

  useEffect(() => {
    async function fetchCharacterId(charcaterName: string) {
      console.log(`URL: ${baseURL}id?character_name=${charcaterName}`);
      try {
        /*
        const response = await fetch(`${baseURL}id?character_name=${charcaterName}`, {
            method: "GET",
            headers: {
                "x-nxopen-api-key": apiKey,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setChar_UID(data.ocid);
        */
        // Simulating API call
        setChar_UID(
          "dc7017ea51c5a2b237f4e217ddbbf0b5c179867d69c59b8aea4677d24c0f9627",
        );
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchCharacterId("Kelly");
  }, []); // Runs only once when component mounts

  useEffect(() => {
    async function fetchCharacterBasic(ocid: string) {
      if (!ocid) return;
      console.log(`URL: ${baseURL}character/basic?ocid=${ocid}`);
      try {
        /*
          const response = await fetch(`${baseURL}character/basic?ocid=${ocid}`, {
              method: "GET",
              headers: {
                  "x-nxopen-api-key": apiKey,
                  "Content-Type": "application/json"
              }
          });
  
          if (!response.ok) {
              throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
  
          const data = await response.json();
          console.log('basic Data: ', data);
          setChar_info(data);
          */
        // Simulating API call
        setChar_info(TestObj);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchCharacterBasic(char_UID);
  }, [char_UID]); // Runs when char_UID updates

  useEffect(() => {
    function englishfy(info: CharacterType) {
      let updateInfo = { ...info };

      Object.entries(info).forEach(([key, value]) => {
        koreanToEnglish.forEach((x) => {
          if (x.korean === value) {
            updateInfo[key] = x.english as any; // Update the value
            // return true; // Break out of inner loop
          }
        });
      });
      setEnglishInfo({ ...englishInfo, ...updateInfo });
    }
    englishfy(char_info);
  }, [char_info]); // Runs when char_info updates

  return (
    <div>
      <h1>Character Info</h1>
      {englishInfo && (
        <div>
          <h3>{englishInfo.character_name}</h3>
          <h5>{englishInfo.character_class_name}</h5>
          <h5>
            {console.log("englishInfo.title_stat: ", englishInfo.title_stat)}
          </h5>
        </div>
      )}
    </div>
  );
};

export default Character;
