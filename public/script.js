const myCustomUniqueUserId = "5f0dedbcbdca4c542c0136a1";

window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "61ccb94d-b9f7-4970-ae11-7c1e40e3b2af",
  });

  OneSignal.on("subscriptionChange", function (isSubscribed) {
    console.log("changing subscription ", isSubscribed);

    if (isSubscribed) {
      // The user is subscribed
      //   Either the user subscribed for the first time
      //   Or the user was subscribed -> unsubscribed -> subscribed
      OneSignal.push(function () {
        OneSignal.setExternalUserId(myCustomUniqueUserId);
      });
    }
  });
});
