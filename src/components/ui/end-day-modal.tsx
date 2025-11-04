// src/components/ui/end-day-modal.tsx
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EndDayModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function EndDayModal({ open, onClose, onConfirm }: EndDayModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-blue-600">
            Dag afsluiten
          </DialogTitle>
        </DialogHeader>

        <p className="text-gray-600 mt-2">
          Weet je zeker dat je de dag wilt afsluiten? Je ontvangt salaris, betaalt kosten en de volgende dag begint.
        </p>

        <DialogFooter className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Annuleren
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={onConfirm}
          >
            Volgende dag
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
