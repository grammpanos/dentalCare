import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "./translations";

export function useTranslation() {
  const { locale } = useContext(LanguageContext);
  return translations[locale] || translations.gr;
}
