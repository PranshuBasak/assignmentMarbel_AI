import trend from '../../assets/icons/trend.svg';

export const CustomToolTip = ({
  active,
  payload,
  label,
  coordinate,
  data,
}: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;

    const tooltipStyle = {
      left: coordinate.x, // Adjust positioning
      top: coordinate.y, // Adjust positioning
    };

    console.log(dataPoint)

    return (
      <div
        className="px-4 py-1   flex justify-center items-center gap-3  bg-white shadow-xl rounded-xl"
        style={tooltipStyle}
      >
        <p className="bg-blue-400 w-6 h-1 rounded"></p>
        <p className="">{label}</p>
        <p className="">{dataPoint.value}</p>
        <img src={trend} alt="trend" className='w-4 h-4'/>
        <p className="">{data}</p>

      </div>
    );
  }

  return null;
};
