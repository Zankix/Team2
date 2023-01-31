import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Client from '../pages/client/Client';
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import Workout from '../pages/workout/Workout';
import { RouteType } from "./config";


const appRoutes: RouteType[] = [
  {
    path: '/dashboard',
    element: <DashboardPageLayout/>,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Dashboard',
      icon: <DashboardOutlinedIcon />
    },
   
  },
  {
    path: '/workout',
    element: <Workout />,
    state: 'workout',
    sidebarProps: {
      displayText: 'Manage Workouts',
      icon: <FitnessCenterOutlinedIcon/>
    }
  },
  {
    path: '/client',
    element: <Client />,
    state: 'client',
    sidebarProps: {
      displayText: 'Manage Clients',
      icon: <PeopleAltOutlinedIcon/>
    }
  }
];

export default appRoutes;