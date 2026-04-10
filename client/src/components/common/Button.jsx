const ReserveBtn = ({ text, onClick, color, textColor, isItNav }) => {
    const visibilityClass = isItNav ? "hidden md:inline-flex" : "";
    return (
        <button
            onClick={onClick}
            style={{
                "--btn-color": `var(${color || '--primary-green-cold'})`,
                "--btn-text": `var(${textColor || '--white'})`,
            }}
             className={`${visibilityClass} bg-[var(--btn-color)] text-[var(--btn-text)] hover:brightness-90 px-6 py-2 rounded-lg text-[18px]`}
        >
            {text}
        </button>
    );
};

export default ReserveBtn;