import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  ranges: number[];
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  ranges,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    const currentIndex = ranges.indexOf(value);
    const nextIndex = (currentIndex + 1) % ranges.length;
    onChange(ranges[nextIndex]);
  }, [onChange, ranges, value]);

  const onSubtract = useCallback(() => {
    const currentIndex = ranges.indexOf(value);
    const prevIndex =
      currentIndex === 0 ? ranges.length - 1 : currentIndex - 1;
    onChange(ranges[prevIndex]);
  }, [onChange, ranges, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-sm text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onSubtract}
          className="w-10 h-10 rounded-full border-[1px] flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlineMinus />
        </div>
        <div className="text-xl font-light text-neutral-600">{value}</div>
        <div
          onClick={onAdd}
          className="w-10 h-10 rounded-full border-[1px] flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
