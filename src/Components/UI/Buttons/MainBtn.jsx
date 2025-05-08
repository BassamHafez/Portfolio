const MainBtn = ({ onClick, text, type,classes}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn bg-cyan-500 shadow-3xl hover:bg-white hover:text-cyan-500 duration-300 ${classes}`}
    >
      {text}
    </button>
  );
};

export default MainBtn;
