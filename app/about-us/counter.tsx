"use client";

import CountUp from "react-countup";

interface Counter {
  end: number;
  decimals: number;
  duration: number;
  prefix: string;
  suffix: string;
  description: string;
}

export default function Counter({ end, decimals, duration, prefix = "", suffix = "", description = "" } : Counter) {
  return (
    <>
      <p className="display-1 text-secondary fw-medium mb-0">
        <CountUp end={end} decimals={decimals} duration={duration} prefix={prefix}/><span className="text-tertiary">{suffix}</span>
      </p>
      <p className="fs-4 text-secondary">
        {description}
      </p>
    </>
  )
}