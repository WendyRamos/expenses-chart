import React from "react";
import data from "./../Services/data.json";
import LogoImage from "../img/logo.svg";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className=" bg-dark-brown p-2 rounded-md">
        <b><p className="intro text-white">{`$${payload[0].value}`}</p></b>
      </div>
    );
  }

  return null;
};

function Chart() {
  return (
    <div className="w-[400px]">
      <div className="bg-soft-red rounded-2xl mb-5 py-3 px-5 flex justify-between">
        <div className="text-white">
          <p className="text-sm">My balance</p>
          <b className="text-2xl">$921.48</b>
        </div>
        <img src={LogoImage} alt="Logo"></img>
      </div>
      <div className="bg-white rounded-2xl p-y-3 px-5 ">
        <h2 className="text-dark-brown font-bold text-2xl">
          Spending - Last 7 days
        </h2>
        <div className="h-[250px] w-full">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <Tooltip content={<CustomTooltip />}/>
            <Bar dataKey="amount" fill="#ec765f" radius={[5, 5, 0, 0]}></Bar>
          </BarChart>
        </ResponsiveContainer></div>
        <div className=" border-t-2 border-very-pale-orange my-3 py-6">
          <p className="text-medium-brown">Total this month</p>
          <div className="flex justify-between text-dark-brown">
            <span className="text-4xl">
              <b>$478.33</b>
            </span>
            <div>
              <span className="text-sm">
                <b>+2.4%</b>
              </span>
              <p className="text-medium-brown">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
