import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, Rectangle, CartesianGrid, YAxis } from 'recharts';
import PropTypes from 'prop-types';

const COLORS = ['#d833db', '#ebb08e'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Chart = ({stat}) => {
    const pieData = [
        {name: 'Male Biodata', value: stat?.maleBiodata},
        {name: 'Female Biodata', value: stat?.femaleBiodata}
    ];

    const barData = [
        {"Premium Biodata": stat?.premiumBiodata, "Total Revenue": stat?.totalRevenue}
    ];

    return (<div className='w-full max-w-sm md:max-w-screen-md mx-auto gap-10 flex-col md:flex-row flex items-center h-screen md:h-96 mt-10'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={700} height={700}>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={barData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <YAxis />
          <Legend />
          <Bar dataKey="Premium Biodata" fill="#d833db" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Total Revenue" fill="#ebb08e" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
        </div>);
};

Chart.propTypes = {
    stat: PropTypes.object
}

export default Chart;