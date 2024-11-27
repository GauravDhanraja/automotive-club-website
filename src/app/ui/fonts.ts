import { Jaro, Audiowide, Caveat } from "next/font/google";

export const jaro = Jaro({
  subsets: ["latin"],
  weight: "400",
});

export const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: "700",
});
