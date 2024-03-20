import React from "react";
import Test from "./Test";
import Button from '@mui/material/Button';

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ComposedChart,
  PieChart,
  Pie,
  Treemap,
  Label,
  LabelList,
  Cell,
} from "recharts";
const Pdata = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 2770,
    pv: 3988,
    amt: 2600,
  },
  {
    name: "Page F",
    uv: 2930,
    pv: 3282,
    amt: 2440,
  },
  {
    name: "Page G",
    uv: 2720,
    pv: 3998,
    amt: 2300,
  },
  {
    name: "Page I",
    uv: 2730,
    pv: 3948,
    amt: 2500,
  },
  {
    name: "Page J",
    uv: 2720,
    pv: 3928,
    amt: 2020,
  },
];

const datafirst = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

const datasec = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

const dataa = [
  {
    name: "axis",
    children: [
      {
        name: "Axis",
        size: 24593,
      },
      {
        name: "Axes",
        size: 1302,
      },
      {
        name: "AxisGridLine",
        size: 652,
      },
      {
        name: "AxisLabel",
        size: 636,
      },
      {
        name: "CartesianAxes",
        size: 6703,
      },
    ],
  },
  {
    name: "controls",
    children: [
      {
        name: "TooltipControl",
        size: 8435,
      },
      {
        name: "SelectionControl",
        size: 7862,
      },
      {
        name: "PanZoomControl",
        size: 5222,
      },
      {
        name: "HoverControl",
        size: 4896,
      },
      {
        name: "ControlList",
        size: 4665,
      },
      {
        name: "ClickControl",
        size: 3824,
      },
      {
        name: "ExpandControl",
        size: 2832,
      },
      {
        name: "DragControl",
        size: 2649,
      },
      {
        name: "AnchorControl",
        size: 2138,
      },
      {
        name: "Control",
        size: 1353,
      },
      {
        name: "IControl",
        size: 763,
      },
    ],
  },
  {
    name: "data",
    children: [
      {
        name: "Data",
        size: 20544,
      },
      {
        name: "NodeSprite",
        size: 19382,
      },
      {
        name: "DataList",
        size: 19788,
      },
      {
        name: "DataSprite",
        size: 10349,
      },
      {
        name: "EdgeSprite",
        size: 3301,
      },
      {
        name: "render",
        children: [
          {
            name: "EdgeRenderer",
            size: 5569,
          },
          {
            name: "ShapeRenderer",
            size: 2247,
          },
          {
            name: "ArrowType",
            size: 698,
          },
          {
            name: "IRenderer",
            size: 353,
          },
        ],
      },
      {
        name: "ScaleBinding",
        size: 11275,
      },
      {
        name: "TreeBuilder",
        size: 9930,
      },
      {
        name: "Tree",
        size: 7147,
      },
    ],
  },
  {
    name: "events",
    children: [
      {
        name: "DataEvent",
        size: 7313,
      },
      {
        name: "SelectionEvent",
        size: 6880,
      },
      {
        name: "TooltipEvent",
        size: 3701,
      },
      {
        name: "VisualizationEvent",
        size: 2117,
      },
    ],
  },
  {
    name: "legend",
    children: [
      {
        name: "Legend",
        size: 20859,
      },
      {
        name: "LegendRange",
        size: 10530,
      },
      {
        name: "LegendItem",
        size: 4614,
      },
    ],
  },
  {
    name: "operator",
    children: [
      {
        name: "distortion",
        children: [
          {
            name: "Distortion",
            size: 6314,
          },
          {
            name: "BifocalDistortion",
            size: 4461,
          },
          {
            name: "FisheyeDistortion",
            size: 3444,
          },
        ],
      },
      {
        name: "encoder",
        children: [
          {
            name: "PropertyEncoder",
            size: 4138,
          },
          {
            name: "Encoder",
            size: 4060,
          },
          {
            name: "ColorEncoder",
            size: 3179,
          },
          {
            name: "SizeEncoder",
            size: 1830,
          },
          {
            name: "ShapeEncoder",
            size: 1690,
          },
        ],
      },
      {
        name: "filter",
        children: [
          {
            name: "FisheyeTreeFilter",
            size: 5219,
          },
          {
            name: "VisibilityFilter",
            size: 3509,
          },
          {
            name: "GraphDistanceFilter",
            size: 3165,
          },
        ],
      },
      {
        name: "IOperator",
        size: 1286,
      },
      {
        name: "label",
        children: [
          {
            name: "Labeler",
            size: 9956,
          },
          {
            name: "RadialLabeler",
            size: 3899,
          },
          {
            name: "StackedAreaLabeler",
            size: 3202,
          },
        ],
      },
      {
        name: "layout",
        children: [
          {
            name: "RadialTreeLayout",
            size: 12348,
          },
          {
            name: "NodeLinkTreeLayout",
            size: 12870,
          },
          {
            name: "CirclePackingLayout",
            size: 12003,
          },
          {
            name: "CircleLayout",
            size: 9317,
          },
          {
            name: "TreeMapLayout",
            size: 9191,
          },
          {
            name: "StackedAreaLayout",
            size: 9121,
          },
          {
            name: "Layout",
            size: 7881,
          },
          {
            name: "AxisLayout",
            size: 6725,
          },
          {
            name: "IcicleTreeLayout",
            size: 4864,
          },
          {
            name: "DendrogramLayout",
            size: 4853,
          },
          {
            name: "ForceDirectedLayout",
            size: 8411,
          },
          {
            name: "BundledEdgeRouter",
            size: 3727,
          },
          {
            name: "IndentedTreeLayout",
            size: 3174,
          },
          {
            name: "PieLayout",
            size: 2728,
          },
          {
            name: "RandomLayout",
            size: 870,
          },
        ],
      },
      {
        name: "OperatorList",
        size: 5248,
      },
      {
        name: "OperatorSequence",
        size: 4190,
      },
      {
        name: "OperatorSwitch",
        size: 2581,
      },
      {
        name: "Operator",
        size: 2490,
      },
      {
        name: "SortOperator",
        size: 2023,
      },
    ],
  },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#888888", "#8b16cf"];

const Overview = (props) => {
  return (
    <div className="charts">
      <div className="allcharts">
        <ResponsiveContainer width="50%" aspect={3}>
          <LineChart
            data={Pdata}
            width={100}
            height={50}
            margin={{ top: 1, bottom: 2, right: 100, left: 10 }}
          >
            <CartesianGrid strokeDasharray="3,3" />
            <XAxis dataKey="name" interval={"preserveStartEnd"} />
            <YAxis />
            <Tooltip
              contentStyle={{ background: "#dabc96", borderRadius: "4px" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="blue"
              activeDot={{ r: 8 }}
            />
            <Line
              type="natural"
              dataKey="pv"
              stroke="green"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Area chart */}
        <ResponsiveContainer width="50%" aspect={3}>
          <AreaChart
            data={Pdata}
            width={100}
            height={50}
            margin={{ top: 1, bottom: 2, right: 200, left: 10 }}
          >
            <CartesianGrid strokeDasharray="3,3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="uv" stroke="blue" fill="blue" />
          </AreaChart>
        </ResponsiveContainer>

        {/* Bar chart */}
        <ResponsiveContainer width="50%" aspect={3}>
          <BarChart
            data={Pdata}
            width={100}
            height={50}
            margin={{ top: 1, bottom: 2, right: 200, left: 10 }}
          >
            <CartesianGrid strokeDasharray="3,3" />
            <XAxis dataKey="name" />

            <YAxis
              label={{
                value: "pv of page",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="uv" fill="#8884d8">
              <LabelList dataKey="name" position="top" />
            </Bar>
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        {/* ComposedChart chart */}
        <ResponsiveContainer width="50%" aspect={3}>
          <ComposedChart
            data={Pdata}
            width={100}
            height={50}
            margin={{ top: 1, bottom: 2, right: 200, left: 10 }}
          >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
        {/* Treemap chart */}
        <ResponsiveContainer width="50%" aspect={3}>
          <Treemap
            width={100}
            height={50}
            margin={{ top: 1, bottom: 2, right: 200, left: 10 }}
            data={dataa}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="#fff"
            fill="#8884d8"
          />
        </ResponsiveContainer>

        {/* PieChart chart */}
        <ResponsiveContainer width="50%" aspect={3}>
          <PieChart
            data={Pdata}
            width={100}
            height={50}
            margin={{ top: 1, bottom: 2, right: 200, left: 10 }}
          >
            <Pie
              data={datafirst}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill="#8884d8"
            />
            <Pie
              data={datasec}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="50%" aspect={3}>
          <PieChart
            width={100}
            height={50}
            margin={{ top: 1, bottom: 2, right: 200, left: 10 }}
          >
            <Pie
              data={datafirst}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {datafirst.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

    
      </div>
    </div>
  );
};

export default Overview;
