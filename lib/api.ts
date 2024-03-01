interface InfoItem {
  stock_id: string;
  stock_name: string;
}

interface RevenueItem {
  date: string;
  revenue: number;
}

const token = process.env.FINMIND_API_TOKEN;
const fetchUrl = `https://api.finmindtrade.com/api/v4/data?token=${token}`;

async function getTaiwanStockInfo(): Promise<string[]> {
  const url = `${fetchUrl}&dataset=TaiwanStockInfo`;
  const res = await fetch(url);
  const json = await res.json();
  const data = json.data.map((item: InfoItem) => `${item.stock_id} ${item.stock_name}`);
  return Array.from(new Set(data));
}

async function getTaiwanStockMonthRevenue(id: string): Promise<[string, number][]> {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const yearStart = year - 9;
  const month = currentDate.getMonth() + 1;
  const start = `${yearStart}-${month}-1`;
  const end = `${year}-${month}-1`;
  const url = `${fetchUrl}&dataset=TaiwanStockMonthRevenue&data_id=${id}&start_date=${start}&end_date=${end}`;
  const res = await fetch(url);
  const json = await res.json();
  const data = json.data.map((item: RevenueItem) => [item.date, item.revenue / 1000]);
  return data;
}

export { getTaiwanStockInfo, getTaiwanStockMonthRevenue };
