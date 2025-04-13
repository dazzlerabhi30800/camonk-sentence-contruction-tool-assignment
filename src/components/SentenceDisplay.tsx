import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface SentenceDisplayProps {
  template: string; // e.g., "The _____ jumped over the _____."
  selectedWords: (string | null)[]; // e.g., ["dog", null]
  className?: string;
  optionLength: number;
  handleBlank: (option: string) => void;
}

const SentenceDisplay: React.FC<SentenceDisplayProps> = ({
  template,
  selectedWords,
  className,
  optionLength,
  handleBlank,
}) => {
  // Regex to match one or more underscores
  const blankRegex = /_+/g;

  // Split template on underscores, preserving them
  const parts = template.split(blankRegex).flatMap((part, index) => {
    // After each text part (except the last), insert a blank or word
    const result = [<span key={`text-${index}`}>{part}</span>];
    if (index < optionLength) {
      const word = selectedWords[index];
      result.push(
        <p
          key={`blank-${index}`}
          className={twMerge(
            "mx-2",
            word
              ? "border-b-2 border-gray-2 pb-2 font-semibold px-2"
              : "text-gray-400"
          )}
        >
          {word ? (
            <Button
              variant="outline"
              onClick={() => handleBlank(word)}
              className="text-xs border-gray-5 p-1 text-gray-1"
              height="fit-content"
              width="fit-content"
            >
              {word}
            </Button>
          ) : (
            <span>______________</span>
          )}
        </p>
      );
    }
    return result;
  });

  return (
    <div className={twMerge("text-lg gap-y-3 flex flex-wrap", className)}>
      {parts}
    </div>
  );
};

export default SentenceDisplay;
