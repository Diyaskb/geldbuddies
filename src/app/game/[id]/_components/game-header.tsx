"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useGameStore from "@/store/game/game-store";
import { Calendar, DollarSign, User, Zap } from "lucide-react";
import EndDayModal from "@/components/ui/end-day-modal";

interface GameHeaderProps {
  userName: string;
  currentDate: string;
}

export function GameHeader({ userName, currentDate }: GameHeaderProps) {
  const { player, advanceMonth, time } = useGameStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="h-14 shrink-0 pl-8 pr-1.5 border-b bg-sidebar">
      <div className="container h-full flex items-center justify-between">
        {/* Left side: player info */}
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="gap-2 text-base border-white inset-shadow-xs">
            <User className="size-5 text-primary" />
            {userName}
          </Badge>

          <Badge variant="secondary" className="gap-2 text-base border-white inset-shadow-xs">
            <DollarSign className="size-5 text-emerald-500" />${player.money}
          </Badge>

          <Badge variant="secondary" className="gap-2 text-base border-white inset-shadow-xs">
            <Zap className="size-5 text-yellow-500" />
            {player.energy}/{player.maxEnergy}
          </Badge>
        </div>

        {/* Right side: open modal instead of direct advance */}
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="outline"
          className="flex items-center gap-2 text-blue-600 border-blue-400 hover:bg-blue-50 transition-colors rounded-full px-4 py-2"
        >
          <Calendar className="size-5 text-blue-500" />
          <span className="font-medium">Einde dag: {time.day}</span>
        </Button>

        {/* End-of-day confirmation modal */}
        <EndDayModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => {
            advanceMonth();
            setIsModalOpen(false);
          }}
        />
      </div>
    </header>
  );
}
