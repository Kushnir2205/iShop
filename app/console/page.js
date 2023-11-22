import ConsoleTable from "@/components/ConsoleTable/ConsoleTable";
import { fetchAllGudget } from "@/services/api/api";

const Console = async () => {
  const data = await fetchAllGudget({ category: "" });
  return <ConsoleTable data={data} />;
};

export default Console;
