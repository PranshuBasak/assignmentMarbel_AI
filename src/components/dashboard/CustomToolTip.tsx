import trend from '../../assets/icons/trend.svg';

export const CustomToolTip = ({
  active,
  payload,
  label,
  coordinate,
}: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;

    const tooltipStyle = {
      left: coordinate.x, // Adjust positioning
      top: coordinate.y, // Adjust positioning
    };

    // console.log(dataPoint)

    return (
      <div
        className="px-4 py-4   flex justify-center items-center gap-3  bg-white shadow-xl rounded-xl"
        style={tooltipStyle}
      >
        <p className=" bg-gradient-to-r from-blue-400 to-blue-300 w-6 h-1 rounded"></p>
        <p className="dropDownContent">{label}</p>
        <p className="cardHead">{dataPoint.value}</p>
        
        <p className="flex justify-center items-center gap-1 percent">
            <img src={trend} alt="trend" className='w-4 h-4'/>
            {dataPoint.percentage}%
        </p>

      </div>
    );
  }

  return null;
};
