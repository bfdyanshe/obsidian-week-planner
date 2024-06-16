import type { Moment } from "moment";
import type { TFile } from "obsidian";
import {
  createDailyNote,
  getAllDailyNotes,
  getDailyNote,
  createWeeklyNote,
  getAllWeeklyNotes,
  getWeeklyNote,
} from "obsidian-daily-notes-interface";

export async function createDailyNoteIfNeeded(moment: Moment): Promise<TFile> {
  return getDailyNote(moment, getAllDailyNotes()) || createDailyNote(moment);
}

export async function createWeeklyNoteIfNeeded(moment: Moment): Promise<TFile> {
  return getWeeklyNote(moment, getAllWeeklyNotes()) || createWeeklyNote(moment);
}
