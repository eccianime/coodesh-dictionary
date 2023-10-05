import { useNavigation } from "@react-navigation/native";
import { AppNavigation } from "../types";

export const useAppNavigation = () => useNavigation<AppNavigation>();

export * from "./store";
