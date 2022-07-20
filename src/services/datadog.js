import {
  DdSdkReactNative,
  DdSdkReactNativeConfiguration,
  SdkVerbosity,
} from '@datadog/mobile-react-native';

class DataDogs {
  async startTrackingViews() {
    const config = new DdSdkReactNativeConfiguration(
      'pub893f76a3bd69c01726dd4340f669056a',
      'prod',
      '90e1704a-19c1-4ca3-8341-73f954d1ac65',
      true, // track User interactions (e.g.: Tap on buttons. You can use 'accessibilityLabel' element property to give tap action the name, otherwise element type will be reported)
      true, // track XHR Resources
      true, // track Errors
    );

    config.site = 'US1';
    // Optional: enable or disable native crash reports
    config.nativeCrashReportEnabled = true;
    // Optional: sample RUM sessions (here, 80% of session will be sent to Datadog. Default = 100%)
    config.sessionSamplingRate = 80;
    // Optional: sample tracing integrations for network calls between your app and your backend (here, 80% of calls to your instrumented backend will be linked from the RUM view to the APM view. Default = 20%)
    // You need to specify the hosts of your backends to enable tracing with these backends
    config.resourceTracingSamplingRate = 80;
    config.firstPartyHosts = ['example.com']; // matches 'example.com' and subdomains like 'api.example.com'
    // Optional: set the reported service name (by default, it'll use the package name / bundleIdentifier of your Android / iOS app respectively)
    config.serviceName = 'com.example.reactnative';
    // Optional: let the SDK print internal logs (above or equal to the provided level. Default = undefined (meaning no logs))
    config.verbosity = SdkVerbosity.ERROR;

    await DdSdkReactNative.initialize(config);

    // Once SDK is initialized you need to setup view tracking to be able to see data in the RUM Dashboard.
  }
}

export const Datadog = new DataDogs();
