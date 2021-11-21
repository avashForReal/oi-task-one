import { useEffect, useState } from "react";

const Progress = () => {
    
    const [completed, setCompleted] = useState(50);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 3000);
    }, [])

    const barStyle = {
        width: `${completed}%`,
        transition: 'width 1s ease-in-out'
    }

  return (
    <>
        <div className="mx-6 mt-6 text-left">
            <p className="font-bold text-2xl text-gray-700">Progress Bar</p>
        </div>

      <div className="bg-gray-300 mx-6 mt-2 h-6 rounded-full">
        <div data-testid="progress-bar" style={barStyle} className="h-full bg-blue-700 rounded-full text-center">
            <span className="text-gray-100 font-bold">{`${completed}%`}</span>
        </div>
      </div>
    </>
  );
};

export default Progress;
