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
    const result = [
      <span className="leading-[2.8] leading-[2.1]" key={`text-${index}`}>
        {part}
      </span>,
    ];
    if (index < optionLength) {
      const word = selectedWords[index];
      result.push(
        <span
          key={`blank-${index}`}
          className={twMerge(
            "inline-block mx-1 leading-[2.8] md:leading-[2.1] min-w-20 pb-1 md:pb-0 border-b-2 border-gray-2  font-semibold"
            // word && word !== "null" ? "-translate-y-3" : "translate-y-0"
          )}
        >
          {word && word !== "null" && (
            <Button
              variant="outline"
              onClick={() => handleBlank(word)}
              className="text-xs border-gray-5 py-1 text-gray-1 h-fit w-full"
            >
              {word}
            </Button>
          )}
          {/* //  : (
          //   <span>___________</span>
          // )} */}
        </span>
      );
    }
    // console.log(result);
    return result;
  });

  return (
    <div className={twMerge("text-sm md:text-lg", className)}>{parts}</div>
  );
};

export default SentenceDisplay;
