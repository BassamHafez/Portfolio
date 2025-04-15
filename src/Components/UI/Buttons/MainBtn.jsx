const MainBtn = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="btn bg-cyan-400 shadow-2xl hover:bg-white hover:text-cyan-400 duration-300"
    >
      {text}
    </button>
  );
};

export default MainBtn;
