import { useEffect, useState } from "react";
import { LoremIpsum } from "lorem-ipsum";

export const useLoremIpsum = (paragraphs = 1) => {
  const [content, setContent] = useState("");
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  useEffect(() => {
    setContent(lorem.generateParagraphs(paragraphs));
  }, []);

  return content;
};
