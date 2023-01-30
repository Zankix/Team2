import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Client from '../pages/client/Client';
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DefaultPage from '../pages/dashboard/DefaultPage';
import HomePage from "../pages/home/HomePage";
import LoginPage from '../pages/home/LoginPage';
import Workout from '../pages/workout/Workout';
import { RouteType } from "./config";

const appRoutes: RouteType[] = [
  {path: '/home',
element: <LoginPage />,
state: 'login'
},
  {
    index: true,
    element: <HomePage />,
    state: 'home'
  },
  {
    path: '/dashboard',
    element: <DashboardPageLayout/>,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Dashboard',
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: '/dashboard/default',
        element: <DefaultPage />,
        state: 'dashboard.default',
        sidebarProps: {
          displayText: 'Default'
        }
      }
    ]
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