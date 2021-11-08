import { boot } from 'quasar/wrappers'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$helper = new {
    canReceiveNotification: () => Notification.permission == 'granted',
    requestNotificationPermission: () => Notification.requestPermission((status) => console.log('Notification permission status:', status))
  }
  // ^ this.$helper
})
