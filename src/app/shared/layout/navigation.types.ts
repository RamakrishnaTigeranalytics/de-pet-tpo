export const MenuItemConfig = [
  // {
  //   displayName: 'New Scenario',
  //   matIcon: 'add-circle-sharp',
  //   routerLink: '/app/dashboard',
  // },
  {
    displayName: 'Home',
    matIcon: 'home-outline',
    routerLink: '/app/analytics',
  },
  {
    displayName: 'Scenarios',
    matIcon: 'create-outline',
    children: [
      {
        displayName: 'Optimizer',
        matIcon: 'flower',
        routerLink: '/admin/users',
      },
      {
        displayName: 'Planner',
        matIcon: 'trending-up-outline',
        routerLink: '/admin/example',
      },
    ],
  },
  // {
  //   displayName: 'Notification',
  //   matIcon: 'notifications-outline',
  //   routerLink: '/app/analytics',
  // },
  // {
  //   displayName: 'Help & Support',
  //   matIcon: 'help-circle-outline',
  //   routerLink: '/app/analytics',
  // },
  // {
  //   displayName: 'User',
  //   matIcon: 'person-circle-outline',
  //   routerLink: '/app/analytics',
  // },
];
