import Input from "@/shared/ui/Input";
import { useFilter } from "../model";

type FilterProps = {
  className?: string;
};

const Filter = ({ className }: FilterProps) => {
  const { filter, setFilter } = useFilter();
  return <Input className={className} value={filter} onChange={setFilter} />;
};

export default Filter;
