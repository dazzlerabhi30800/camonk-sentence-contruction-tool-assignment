import ButtonWrapper from "./ButtonWrapper";
import Details from "./Details";

const MainWrapper = () => {
  return (
    <div className="flex-1 h-inherit w-full flex flex-col gap-[76px] justify-center items-center">
      <div className="flex flex-col gap-8">
        <img src="/logo.svg" className="w-auto h-20 object-fit" alt="Logo" />
        <div className="flex flex-col gap-3 text-center items-center">
          <h1 className="text-h1 text-black-1 font-semibold">
            Sentence Construction
          </h1>
          <p className="text-p1 text-gray-2">
            Select the correct words to complete the sentence by arranging the
            provided options in the right order.
          </p>
        </div>
      </div>
      {/* Details Wrapper */}
      <Details />
      {/* Buttons Wrapper */}
      <ButtonWrapper />
    </div>
  );
};

export default MainWrapper;
