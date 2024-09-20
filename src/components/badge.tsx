export const Badge = ({ text }: { text: string }) => {
  return (
    <>
      <div className="bg-white px-6 py-[4px] text-[16px] text-center font-bold text-[#424242] rounded-[32px] w-[fit-content]">
        {text}
      </div>
    </>
  );
};

export const Badge2 = ({ text }: { text: string }) => {
    return (
      <>
        <div className="bg-[#f9f9f9] px-6 py-[4px] text-[16px] text-center font-bold text-[#424242] rounded-[8px] w-[fit-content] border border-[#d0d0d0]">
          {text}
        </div>
      </>
    );
  };
