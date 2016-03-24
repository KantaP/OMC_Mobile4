import {App, IonicApp, Platform,Page, Config, Events} from 'ionic-angular';
import {HomePage} from './pages/home/home';
import {GetQuotePage} from './pages/getquote/getquote';
import {InitialPage} from './pages/initial/initial';
import {SignoutCompoent} from './pages/signOut/signOut';
@App({
  templateUrl: 'build/app.html',
  config: {
    production: true,
    platforms: {
      android: {
        activator: 'ripple',
        backButtonIcon: 'md-arrow-back'
      }
    }
  } // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
   rootPage:any;
   pages:any;
   logo:any;
   app:any;
  constructor(platform: Platform,app: IonicApp) {
    this.rootPage = InitialPage;
    this.logo = 'img/logo.png';
    this.app = app;
    this.pages = [
      { title: "Home Page", component: HomePage},
      { title: 'Get Quote', component: GetQuotePage },
      { title: "Sign Out", component: SignoutCompoent}
    ];
    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page.component;
  }
}
