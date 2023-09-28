"use client";
import { useEffect, useRef, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement
)



export default function ChartRender() {

    return <div>
           <Line
                data={{
                labels: [
                    "2023-01",
                    "2023-02",
                    "2023-03",
                    "2023-04",
                    "2023-05",
                    "2023-06",
                    "2023-07",
                ],
                datasets: [
                    {
                    data: [100, 120, 115, 134, 168, 132, 200],
                    backgroundColor: "purple",
                    },
                ],
                }}
            />
    </div>
}