import { Poem } from "../types/poems";

type ReturnGetPoems = {
 
};
export const getPoems = async (): Promise<ReturnGetPoems> => {
  return [
    {
      title: "Epitaph. Intended for Sir Isaac Newton, in Westminster Abbey.",
      author: "Alexander Pope",
      lines: [
        "    ISAACUS NEWTONUS:",
        "    QUEM IMMORTALEM",
        "TESTANTUR TEMPUS, NATURA, COELUM:",
        "      MORTALEM",
        "    HOC MARMOR FATETUR.",
        "",
        "Nature and Nature's laws lay hid in night",
        "God said, Let Newton be! and all was light.",
      ],
      linecount: "7",
    },
  ];
};



const getdata = async (): Promise<Poem[]> => {
  const linkToFetch = "https://poetrydb.org/poemcount/20 "
  const response = await fetch(linkToFetch);
  const data = await response.json();
  
  
  return data;
};

export default getdata