"use client";

import Title from "@/components/shared/Title";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    id: "01",
    name: "Upload File",
    status: "complete",
  },
  {
    id: "02",
    name: "Preview Data",
    status: "current",
  },
  {
    id: "03",
    name: "Upload Summary",
    status: "upcoming",
  },
];

export default function PanelWithBorder() {
  const [activeInx, setActiveIdx] = useState(1);

  return (
    <div className="lg:border-t lg:border-b lg:border-gray-200">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Progress"
      >
        <ol
          role="list"
          className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={cn(
                  stepIdx === 0 ? "border-b-0 rounded-t-md" : "",
                  stepIdx === steps.length - 1 ? "border-t-0 rounded-b-md" : "",
                  "border border-gray-200 overflow-hidden lg:border-0"
                )}
              >
                {step.status === "complete" ? (
                  <button className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "px-6 py-5 flex items-center text-sm font-medium"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full">
                          <CheckIcon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                      <Title className="ml-2 text-indigo-600">
                        {step?.name}
                      </Title>
                    </span>
                  </button>
                ) : step.status === "current" ? (
                  <button aria-current="step">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "px-6 py-5 flex items-center text-sm font-medium"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                          <span className="text-indigo-600">{step.id}</span>
                        </span>
                      </span>
                      <Title className="ml-2 text-indigo-600">
                        {step?.name}
                      </Title>
                    </span>
                  </button>
                ) : (
                  <button className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "px-6 py-5 flex items-center text-sm font-medium"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                          <span className="text-gray-500">{step.id}</span>
                        </span>
                      </span>
                      <Title className="ml-2 text-gray-500">{step?.name}</Title>
                    </span>
                  </button>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div
                      className="hidden absolute top-0 left-0 w-3 inset-0 lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 12 82"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0.5 0V31L10.5 41L0.5 51V82"
                          stroke="currentcolor"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
