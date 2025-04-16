const MainTitle = ({ text, classes }) => {
  return (
    <div
      className={`bg-gray-200 shadow-2xl w-fit m-auto rounded-tr-2xl rounded-bl-2xl px-5 py-2 my-10 ${classes}`}
    >
      <h2 className={`text-lg font-bold `}>{text}</h2>
    </div>
  );
};

export default MainTitle;
