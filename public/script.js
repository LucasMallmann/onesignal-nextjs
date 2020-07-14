const myCustomUniqueUserId = "5f0e3631ea549d721d2baffa";

window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "61ccb94d-b9f7-4970-ae11-7c1e40e3b2af",
  });

  OneSignal.on("subscriptionChange", function (isSubscribed) {
    console.log("changing subscription ", isSubscribed);

    OneSignal.getExternalUserId().then((id) =>
      console.log("External user id is: ", id)
    );

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
