const CardSkeleton = () => {
  return (
    <div className="space-y-4 bg-gray-400 shadow pb-4 rounded-xl w-[350px] overflow-hidden">
      <div className="bg-gray-600 w-full h-[260px] animate-pulse" />
      <div className="space-y-4">
        <div className="bg-gray-600 mx-4 rounded-md w-3/4 h-8 animate-pulse" />
        <div className="bg-gray-600 mx-4 rounded-md w-[316px] h-24 animate-pulse" />
        <div className="bg-gray-600 mx-4 rounded-md w-1/2 h-8 animate-pulse" />
        <div className="bg-gray-600 mx-4 rounded-md w-1/4 h-12 animate-pulse" />
      </div>
    </div>
  );
};

export default CardSkeleton;
