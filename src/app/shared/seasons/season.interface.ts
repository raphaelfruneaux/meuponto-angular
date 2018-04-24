import { DayEntry } from './../day-entry/day-entry.interface';

export enum SeasonPeriodDate {
  start = 16,
  end = 15
}

export interface SeasonPeriod {
  startIn?: Date;
  endIn?: Date;
}

export interface Season {
  date?: Date;
  datePrefix?: string;
  period?: SeasonPeriod;
  entries?: DayEntry[];
  selected?: boolean;
}
