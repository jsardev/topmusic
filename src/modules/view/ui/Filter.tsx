import Input from "@/shared/ui/Input";
import { useFilter } from "../model";

type FilterProps = {
  className?: string;
};

const Filter = ({ className }: FilterProps) => {
  const { filter, setFilter } = useFilter();
  return (
    <Input
      className={className}
      value={filter}
      placeholder="Type artist or album name..."
      onChange={setFilter}
    />
  );
};

export default Filter;
