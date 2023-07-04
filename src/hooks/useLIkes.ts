import { useState, useEffect } from "react";

export function useLikes(id: number) {
  const [isLike, setIsLike] = useState<boolean>(false);

  useEffect(() => {
    const storage = localStorage.getItem("skyPro/likes");
    const likesDict = JSON.parse(storage || "{}");
    if (likesDict[id]) setIsLike(true);
  }, []);

  const handleSetLike = () => {
    const storage = localStorage.getItem("skyPro/likes");
    const likesDict = JSON.parse(storage || "{}");
    localStorage.setItem(
      "skyPro/likes",
      JSON.stringify({
        ...likesDict,
        [id]: !isLike,
      })
    );
    setIsLike(!isLike);
  };

  return {
    isLike,
    setIsLike: handleSetLike,
  };
}
