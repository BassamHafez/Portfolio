const MainBtn = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="btn bg-cyan-500 shadow-3xl hover:bg-white hover:text-cyan-500 duration-300"
    >
      {text}
    </button>
  );
};

export default MainBtn;
