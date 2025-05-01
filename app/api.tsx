import { useState, useEffect } from "react";

// Function to fetch character data from the API
const fetchCharacterData = async (characterName: string) => {
  const response = await fetch(
    `https://open.api.nexon.com/heroes/v2/id?character_name=${characterName}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-nxopen-api-key":
          "test_8449b32d4ef06693600c6e7f1c7cd4dc142b45cd820ca40a71d708cedd0157e5efe8d04e6d233bd35cf2fabdeb93fb0d",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch character data");
  }

  return response.json();
};

// Component to display character information
const CharacterInfo = ({ characterName }: { characterName: string }) => {
  const [data, setData] = useState<any>(null); // Data type can be adjusted based on the response structure
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCharacterData = async () => {
      try {
        const result = await fetchCharacterData(characterName);
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      }
    };

    if (characterName) {
      getCharacterData();
    }
  }, [characterName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Character Info: {data.character_name}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CharacterInfo;
