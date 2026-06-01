const MobileFrame = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-6">
      <div className="relative bg-[#f7f8fa] w-[390px] h-[844px] max-h-[calc(100vh-48px)] overflow-hidden shadow-2xl rounded-[40px] flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;