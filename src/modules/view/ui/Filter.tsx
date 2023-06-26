import Input from "@/shared/ui/Input";
import { useFilter } from "../model";

const Filter = () => {
  const { filter, setFilter } = useFilter();
  return <Input value={filter} onChange={setFilter} />;
};

export default Filter;
