import { GameSlice, TimeSlice } from '../types';

const MONTHS = [
  'Januari',
  'Februari',
  'Maart',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Augustus',
  'September',
  'Oktober',
  'November',
  'December',
];

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',

]

export const createTimeSlice: GameSlice<TimeSlice> = (set, get) => ({
  time: {
    day: 1,
    month: 1,
    year: 2025,
    dayName: DAYS[0],
    monthName: 'Januari'
  },

  advanceMonth: () => {
    // Collect salary
    get().collectSalary();

    // Update stock prices
    get().updateStockPrices();

    // Pay monthly costs
    get().payMonthlyCosts();

    // Reset energy
    get().resetEnergy();

    // Update time
    set((state) => {
        state.time.day++;
      });

    // Add to history
    get().addHistoryEvent({
      type: 'life',
      description: `Nieuwe dag: ${get().time.day}`,
    });
  },

  // Updated function to sync time with organization creation date
  syncTimeWithOrganization: (targetDate: Date) => {
    set((state) => {
      state.time.day = targetDate.getDay() + 1;
      state.time.year = targetDate.getFullYear();
      state.time.dayName = DAYS[state.time.day - 1];
    });

    // Update stock prices to reflect the new time
    get().updateStockPrices();
  },
});
