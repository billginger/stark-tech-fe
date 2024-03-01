import { getTaiwanStockInfo, getTaiwanStockMonthRevenue } from '@/lib/api';
import Search from './components/search';
import Nav from './components/nav';
import Nav2 from './components/nav2';
import Main from './components/main';

interface Props {
  params: {
    id: string;
  };
}

export default async function Home({ params }: Props) {
  const id = params.id;
  const options = await getTaiwanStockInfo();
  const data = await getTaiwanStockMonthRevenue(id);

  return (
    <>
      <div className="bg-white">
        <div className="w-96 mx-auto py-3">
          <Search options={options} />
        </div>
      </div>
      <div className="flex w-[1050px] mx-auto py-6">
        <div className="w-[105px] border-r border-[#dfdfdf]">
          <Nav />
        </div>
        <div className="nav2 w-[155px]">
          <Nav2 />
        </div>
        <div className="grow">
          <Main id={id} options={options} data={data} />
        </div>
      </div>
    </>
  );
}
