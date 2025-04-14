import { twMerge } from "tailwind-merge";

interface SentenceDisplayProps {
  template: string; // e.g., "The _____ jumped over the _____."
  selectedWords: (string | null)[]; // e.g., ["dog", null]
  className?: string;
  optionLength: number;
}

const ScoreSentenceDisplay: React.FC<SentenceDisplayProps> = ({
  template,
  selectedWords,
  className,
  optionLength,
}) => {
  // Regex to match one or more underscores
  const blankRegex = /_+/g;

  // Split template on underscores, preserving them
  const parts = template.split(blankRegex).flatMap((part, index) => {
    // After each text part (except the last), insert a blank or word
    const result = [
      <span className="leading-[1.5]" key={`text-${index}`}>
        {part}
      </span>,
    ];
    if (index < optionLength) {
      const word = selectedWords[index];
      result.push(
        <span
          key={`blank-${index}`}
          className={twMerge(
            "mx-1 leading-[1.5]",
            word ? " font-semibold" : "text-gray-400"
          )}
        >
          {word ? word : "null"}
        </span>
      );
    }
    return result;
  });

  return <div className={twMerge(className)}>{parts}</div>;
};

export default ScoreSentenceDisplay;
