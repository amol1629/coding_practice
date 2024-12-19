import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Here the count will directly goes from 0 to 2. To avoid this, use cleanup function.
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);

    // Cleanup the timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="w-1/2 p-4 mx-auto my-8 text-center border border-red-400 rounded-xl bg-red-50 drop-shadow-2xl">
        <div className="text-4xl font-bold text-pink-600">useEffect Hook</div>

        <div className="my-6">
          <p>
            Counter Component is rendered{" "}
            <span className="px-2 py-1 font-bold text-white bg-green-600 rounded-lg">
              {count}
            </span>{" "}
            times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseEffectHook;
