

const CustomYTick = ({ x, y, payload }: any) => {
    console.log(payload)
    return (

        <text x={x - 10} y={y} textAnchor="end" fill="black" fontSize={12} transform={`rotate(0)`}>
          {payload.value}
        </text>
      );
}

export default CustomYTick