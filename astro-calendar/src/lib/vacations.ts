import { getHolidays } from './holidays';

export interface VacationOption {
  start: Date;
  end: Date;
  spent: number;
  total: number;
  efficiency: number;
}

export function calculateTopVacations(year: number, daysAvailable: number): VacationOption[] {
  const holidays = getHolidays(year);
  const holidayMap = new Set(
    Object.keys(holidays).filter(k => holidays[k].official)
  );
  const results: VacationOption[] = [];

  for (let m = 0; m < 12; m++) {
    const daysInMonth = new Date(year, m + 1, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const tempDate = new Date(year, m, d);
      if (
        tempDate.getDay() === 0 ||
        tempDate.getDay() === 6 ||
        holidayMap.has(`${tempDate.getMonth()}-${tempDate.getDate()}`)
      )
        continue;

      let daysSpent = 0;
      let totalDaysOff = 0;
      const currentDate = new Date(tempDate);
      const startDate = new Date(tempDate);
      let lastDate = new Date(tempDate);

      while (daysSpent < daysAvailable) {
        const key = `${currentDate.getMonth()}-${currentDate.getDate()}`;
        const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
        if (!isWeekend && !holidayMap.has(key)) daysSpent++;
        totalDaysOff++;
        lastDate = new Date(currentDate);
        currentDate.setDate(currentDate.getDate() + 1);

        while (true) {
          const nextKey = `${currentDate.getMonth()}-${currentDate.getDate()}`;
          if (
            currentDate.getDay() === 0 ||
            currentDate.getDay() === 6 ||
            holidayMap.has(nextKey)
          ) {
            totalDaysOff++;
            lastDate = new Date(currentDate);
            currentDate.setDate(currentDate.getDate() + 1);
          } else break;
        }
      }
      results.push({
        start: startDate,
        end: lastDate,
        spent: daysSpent,
        total: totalDaysOff,
        efficiency: totalDaysOff / daysSpent,
      });
    }
  }

  return results
    .sort((a, b) => b.efficiency - a.efficiency || b.total - a.total)
    .filter((v, i, self) => i === self.findIndex(t => t.start.getTime() === v.start.getTime()));
}
