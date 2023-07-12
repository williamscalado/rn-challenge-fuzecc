import { RootStackParamListApp } from "../routes/stackRoutes";
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamListApp {}
  }
}
