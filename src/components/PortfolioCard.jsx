const PortfolioCard = ({img}) => {
  return (
    <li className="bg-purple-300 w-60 h-72 rounded-xl">
      <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
        <img src={img} alt="image" />
      </div>
      <div className="text-xl font-bold mt-2 mx-2"></div>
      <div className="mt-2 mx-2 "></div>
    </li>
  );
};

export default PortfolioCard;
