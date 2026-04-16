

export const GoUpButton = () => {

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScroll}
      className="fixed bottom-5 right-5 hover:cursor-pointer bg-black text-white px-4 py-2 rounded-lg z-50"
    >
      GO UP
    </button>
  );
};




const ReserveBtn = ({ text, onClick, color, textColor, isItNav }) => {
    const visibilityClass = isItNav ? "hidden md:inline-flex" : "";
    return (
        <button
            onClick={onClick}
            style={{
                "--btn-color": `var(${color || '--primary-green-cold'})`,
                "--btn-text": `var(${textColor || '--white'})`,
            }}
             className={`${visibilityClass} bg-[var(--btn-color)] text-[var(--btn-text)] hover:brightness-90 px-6 py-2 rounded-lg text-[18px] hover:cursor-pointer`}
        >
            {text}
        </button>
    );
};

export default ReserveBtn;