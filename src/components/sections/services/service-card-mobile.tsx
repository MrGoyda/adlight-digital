"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ServiceData } from "@/types";
import { ActionModule } from "@/components/modules/action-module";

interface Props {
  data: ServiceData;
  globalPhone: string;
  setGlobalPhone: (v: string) => void;
}

export function ServiceCardMobile({ data, globalPhone, setGlobalPhone }: Props) {
  return (
    <div className="sticky top-20 mb-4 last:mb-0">
      <div className={cn("relative rounded-2xl border border-white/10 bg-slate-900 overflow-hidden shadow-[0_-5px_20px_-10px_rgba(0,0,0,1)]")}>
        <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", data.color)} />
        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-start">
              <div className={cn("p-2 rounded-lg text-white", data.color)}><data.mainIcon className="w-5 h-5" /></div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                <data.statsBadge.icon className={cn("w-3 h-3", data.color.replace("bg-", "text-"))} />
                <span className="text-xs font-bold text-white">{data.statsBadge.value}</span>
              </div>
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-white">{data.title}</h3>
            <p className="text-xs font-bold text-slate-500 uppercase mt-1 tracking-wider">// {data.tagline}</p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{data.desc}</p>
          <div className="flex flex-wrap gap-2">
              {data.techSpecs.map((spec, i) => (
                <span key={i} className="px-2 py-1 bg-slate-950 border border-white/10 rounded-md text-[10px] text-slate-400 flex items-center gap-1">
                  <Image src={spec.iconSrc} alt={spec.name} width={12} height={12} className="w-3 h-3 grayscale opacity-70" /> {spec.name}
                </span>
              ))}
          </div>
          <div className="pt-4 mt-2 border-t border-white/5 w-full">
              <ActionModule colorClass={data.color} mobileFullWidth={true} globalPhone={globalPhone} setGlobalPhone={setGlobalPhone} />
          </div>
        </div>
      </div>
    </div>
  );
}