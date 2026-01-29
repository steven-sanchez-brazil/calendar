export interface Holiday {
  name: string;
  official: boolean;
  date: Date;
}

export function getEaster(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

export function getNextMonday(date: Date): Date {
  const d = new Date(date);
  if (d.getDay() === 1) return d;
  d.setDate(d.getDate() + ((1 - d.getDay() + 7) % 7));
  return d;
}

export function getHolidays(year: number): Record<string, Holiday> {
  const holidays: Record<string, Holiday> = {};
  
  const add = (date: Date, name: string, official = true) => {
    const key = `${date.getMonth()}-${date.getDate()}`;
    holidays[key] = { name, official, date: new Date(date) };
  };

  const easter = getEaster(year);

  // Festivos fijos
  add(new Date(year, 0, 1), "Año Nuevo");
  add(new Date(year, 4, 1), "Día del Trabajo");
  add(new Date(year, 6, 20), "Independencia de Colombia");
  add(new Date(year, 7, 7), "Batalla de Boyacá");
  add(new Date(year, 11, 8), "Inmaculada Concepción");
  add(new Date(year, 11, 25), "Navidad");

  // Festivos con Ley Emiliani
  add(getNextMonday(new Date(year, 0, 6)), "Reyes Magos");
  add(getNextMonday(new Date(year, 2, 19)), "San José");
  add(getNextMonday(new Date(year, 5, 29)), "San Pedro y San Pablo");
  add(getNextMonday(new Date(year, 7, 15)), "Asunción de la Virgen");
  add(getNextMonday(new Date(year, 9, 12)), "Día de la Raza");
  add(getNextMonday(new Date(year, 10, 1)), "Todos los Santos");
  add(getNextMonday(new Date(year, 10, 11)), "Independencia de Cartagena");

  // Festivos religiosos móviles
  const thursdayHoly = new Date(easter);
  thursdayHoly.setDate(easter.getDate() - 3);
  const fridayHoly = new Date(easter);
  fridayHoly.setDate(easter.getDate() - 2);
  add(thursdayHoly, "Jueves Santo");
  add(fridayHoly, "Viernes Santo");

  const ascension = new Date(easter);
  ascension.setDate(easter.getDate() + 39);
  const corpus = new Date(easter);
  corpus.setDate(easter.getDate() + 60);
  const heart = new Date(easter);
  heart.setDate(easter.getDate() + 68);
  
  add(getNextMonday(ascension), "Ascensión del Señor");
  add(getNextMonday(corpus), "Corpus Christi");
  add(getNextMonday(heart), "Sagrado Corazón");

  return holidays;
}
