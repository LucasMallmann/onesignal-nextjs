self.addEventListener("push", function (event) {
  console.log("Push event is here");
  const data = JSON.parse(event.data.json());
  console.log(data);
});
