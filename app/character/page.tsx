"use client";
import { useState, useEffect } from "react";
import { CharacterType } from "./type";
import TestObj from "./test.json";
import characterClassK2E from "./k2e_characterClass.json";
import statNamesK2E from "./k2e_statName.json";
// import Controller from "../../public";
import Image from "next/image";

const Character = () => {
  const [playerStatus, setPlayerStatus] = useState(false);
  const [charName, setCharName] = useState("");
  const [char_UID, setChar_UID] = useState("");
  const [char_info, setChar_info] = useState<CharacterType>(
    {} as CharacterType,
  );
  const apiKey =
    "test_8449b32d4ef06693600c6e7f1c7cd4dc142b45cd820ca40a71d708cedd0157e5efe8d04e6d233bd35cf2fabdeb93fb0d";
  const baseURL = "https://open.api.nexon.com/heroes/v2/";

  async function fetchCharacterId(charcaterName: string) {
    try {
      const response = await fetch(
        `${baseURL}id?character_name=${charcaterName}`,
        {
          method: "GET",
          headers: {
            "x-nxopen-api-key": apiKey,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setChar_UID(data.ocid);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  // When Char Name Updates
  useEffect(() => {
    if (charName !== "") {
      fetchCharacterId(charName);
      // Simulation
      // setChar_info(TestObj);
    }
  }, [charName]); // Runs only once when component mounts

  async function fetchCharacterBasic(ocid: string) {
    if (!ocid) return;
    try {
      const response = await fetch(`${baseURL}character/basic?ocid=${ocid}`, {
        method: "GET",
        headers: {
          "x-nxopen-api-key": apiKey,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setChar_info(data);

      setPlayerStatus(
        char_info.character_date_last_logout <
          char_info.character_date_last_login,
      );

      // Simulating API call
      // setChar_info(TestObj);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    fetchCharacterBasic(char_UID);
  }, [char_UID]); // Runs when char_UID updates

  const getEnglishClassName = (characterClassName: string) => {
    return (
      characterClassK2E.find(({ korean }) => korean === characterClassName)
        ?.english || characterClassName
    );
  };

  const getEnglishStatName = (statName: string) => {
    return statNamesK2E.find(({ korean }) => korean === statName)?.english;
  };

  const isValidDate = (input: Date) => {
    const date = new Date(input);
    return !isNaN(date.getTime());
  };

  const getFormattedDate = (dateToFormat: Date) => {
    if (!dateToFormat && !isValidDate(dateToFormat)) return "";
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateObj = new Date(JSON.parse(JSON.stringify(dateToFormat)));
    return `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setCharName(event.target.value);
    }
  };

  if (Object.keys(char_info).length === 0) {
    return (
      <>
        <input
          onKeyDown={(e) => handleKeyPress(e)}
          type="search"
          placeholder="Character Name"
          className="w-50 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          onBlur={(e) => setCharName(e.target.value)}
        />
        <div className="p-4">No Character Information</div>
      </>
    );
  }

  return (
    <>
      <input
        onKeyDown={(e) => handleKeyPress(e)}
        type="search"
        placeholder="Character Name"
        className="w-50 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        onBlur={(e) => setCharName(e.target.value)}
      />
      <div className="p-4">
        <div className="flex text-xl font-bold my-2">
          <Image
            className="mr-2 text-slate-400"
            src={
              playerStatus
                ? "/images/controller_green.svg"
                : "/images/controller_red.svg"
            }
            alt={
              playerStatus
                ? "Green Controller - Player Online"
                : "Red Controller - Player Offline"
            }
            title={playerStatus ? "Player Online" : "Player Offline"}
            width={24}
            height={24}
          />
          {`${char_info.character_name} - ${getEnglishClassName(char_info.character_class_name)} - Lv ${char_info.character_level}`}
        </div>
        <div>Carde: {char_info.cairde_name}</div>
        <div>Creation: {getFormattedDate(char_info.character_date_create)}</div>
        <div className="border p-2 px-4 my-2 rounded w-fit">
          {char_info?.title_stat?.map((stat) => (
            <div>
              {getEnglishStatName(stat.stat_name)}: {stat.stat_value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Character;
