// type of this context of unicloud cloud object
interface ThisContext {
  getClientInfo(): {
    // from getSystemInfo
    deviceId: string;
    deviceType: string;
    deviceBrand: string;
    deviceModel: string;
    deviceOrientation: string;
    devicePixelRatio: string;
    osName: string;
    osVersion: string;
    osLanguage: string;
    osTheme: string;
    osAndroidAPILevel: string;
    romName: string;
    romVersion: string;
    browserName: string;
    browserVersion: string;
    hostName: string;
    hostVersion: string;
    hostLanguage: string;
    hostTheme: string;
    hostFontSizeSetting: string;
    hostPackageName: string;
    hostSDKVersion: string;
    uniPlatform: string;
    uniCompileVersion: string;
    uniRuntimeVersion: string;
    appId: string;
    appName: string;
    appVersion: string;
    appVersionCode: string;
    appWgtVersion: string;
    appLanguage: string;
    ua: string;
    screenWidth: string;
    screenHeight: string;
    windowWidth: string;
    windowHeight: string;
    windowTop: string;
    windowBottom: string;
    statusBarHeight: string;
    safeArea: string;
    safeAreaInsets: string;

    // extra
    clientIP: string;
    userAgent: string;
    source: "client" | "function" | "http" | "timing" | "server";
    requestId: string;
    scene: string;
  };
  getCloudInfo(): {
    provider: "alipay" | "aliyun" | "tencent";
    spaceId: string;
    useOldSpaceId: boolean;
    functionName: string;
    functionType: "cloudobject";
    runtimeEnv: "local" | "cloud";
  };
  getUniIdToken(): string;
  getMethodName(): string;
  getParams(): any[];
  getUniCloudRequestId(): string;
  getHttpInfo(): {
    path: string;
    httpMethod: string;
    headers: Record<string, string>;
    queryStringParameters: Record<string, string>;
    body: any;
    isBase64Encoded: boolean;
  };
}
