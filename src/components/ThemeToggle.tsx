"use client";

import { useSyncExternalStore } from "react";
import { MonitorIcon, MoonIcon, SunIcon } from "./icons";
import { DARK_QUERY, THEME_KEY as KEY } from "./theme";

// Theme: "system" follows the device's light/dark setting (the default).
// "light" or "dark" is the visitor's own choice, saved in localStorage.

type Mode = "system" | "light" | "dark";
const ORDER: Mode[] = ["system", "light", "dark"];

function readMode(): Mode {
  try {
    const saved = localStorage.getItem(KEY);
    return saved === "light" || saved === "dark" ? saved : "system";
  } catch {
    return "system";
  }
}

function applyMode(mode: Mode) {
  const dark = mode === "dark" || (mode === "system" && matchMedia(DARK_QUERY).matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
}

const listeners = new Set<() => void>();

function setMode(mode: Mode) {
  try {
    if (mode === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, mode);
  } catch {
    // Storage blocked (private mode): the choice still applies until the page is closed.
  }
  applyMode(mode);
  listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  listeners.add(notify);
  const media = matchMedia(DARK_QUERY);
  // Follow the device live while in "system" mode.
  const onDeviceChange = () => readMode() === "system" && applyMode("system");
  // Keep other open tabs in step.
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY || e.key === null) {
      applyMode(readMode());
      notify();
    }
  };
  media.addEventListener("change", onDeviceChange);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(notify);
    media.removeEventListener("change", onDeviceChange);
    window.removeEventListener("storage", onStorage);
  };
}

const icons = { system: MonitorIcon, light: SunIcon, dark: MoonIcon };

type Props = { labels: { label: string } & Record<Mode, string> };

export function ThemeToggle({ labels }: Props) {
  // The server always renders "system"; the saved choice shows after hydration.
  const mode = useSyncExternalStore(subscribe, readMode, () => "system" as Mode);
  const next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];
  const Icon = icons[mode];
  const text = `${labels.label}: ${labels[mode]}`;

  return (
    <button
      type="button"
      onClick={() => setMode(next)}
      aria-label={text}
      title={text}
      className="inline-flex size-11 items-center justify-center rounded-lg text-muted hover:text-ink"
    >
      <Icon className="size-[19px]" />
    </button>
  );
}
