import React from "react";
import SkillDashBoardCard from "../SkillDashBoardCard";
import { SkillDashBoardData } from "../SkillDashBoardData";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { TechStackData } from "../TechStackData";

function SkillDashboard({ title, experience, percentage }) {
  const chartData = TechStackData.map((item) => ({
    name: item.title,
    proficiency: parseInt(item.percentage),
  }));
  return (
    <section>
      <div
        className="container-fluid overflow-hidden py-5 mt-5 mb-5"
        style={{
          minHeight: "auto",
        }}
      >
        <h2
          className="display-4 fw-bold text-white "
          style={{ color: "white", textAlign: "center" }}
        >
          Skills Dashboard
        </h2>
        <p
          className=" text-white mx-auto  fs-2 lh-base text-center  fw-normal my-4"
          style={{ maxWidth: "400px" }}
        >
          Interactive Visualization of my technical expertise across different
          domains
        </p>
        <div
          className="p-4 mx-auto"
          style={{
            backgroundColor: "#0d1b2a",
            border: "2px solid #00ff88",
            borderRadius: "20px",
            height: "400px",
            maxWidth: "800px",
          }}
        >
          <h3 className="text-white mb-4 text-start">
            Proficiency by Technology
          </h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1e2d3d"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#fff"
                tick={{ fill: "#fff", fontSize: 12 }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis stroke="#fff" tick={{ fill: "#fff" }} domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0d1b2a",
                  border: "1px solid #00ff88",
                  borderRadius: "10px",
                }}
                itemStyle={{ color: "#00ff88" }}
                labelStyle={{ color: "#fff" }}
                cursor={{ fill: "rgba(255,255,255, 0.1)" }}
              />
              <Bar dataKey="proficiency" radius={[10, 10, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#00ff88" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="row g-5  px-5 px-md-0 justify-content-center">
          {SkillDashBoardData.map((items) => (
            <SkillDashBoardCard
              key={items.id}
              title={items.title}
              experience={items.experience}
              percentage={items.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillDashboard;
