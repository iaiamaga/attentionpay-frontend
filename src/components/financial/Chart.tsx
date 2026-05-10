interface ChartProps {
  data: Array<{ date: string; value: number }>;
}

const Chart = ({ data }: ChartProps) => {
  if (!data.length) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  return (
    <div className="h-40 flex items-end gap-1">
      {data.map((item, index) => {
        const height = ((item.value - minValue) / range) * 100;
        return (
          <div
            key={index}
            className="flex-1 bg-gradient-to-t from-[#6c5ce7] to-[#00d9ff] rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
            style={{ height: `${Math.max(height, 10)}%` }}
            title={`${item.date}: R$ ${item.value.toFixed(2)}`}
          />
        );
      })}
    </div>
  );
};

export default Chart;