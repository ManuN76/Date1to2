window.function = function (date1, date2) {
  if (date1.value === undefined) return;
  if (date2.value == undefined) return;

  date1 = glide2Date(date1.value, "short");
  date2 = glide2Date(date2.value, "short");

  let dateDif = date2 - date1;
  let dateDifDay = dateDif / 1000 / (24 * 3600);

  let add = 1;
  if (date1 > date2) add = -1;

  let ret = [];

  for (let i = 0; i < Math.abs(dateDifDay) - 1; i++) {
    date1.setDate(date1.getDate() + add);
    ret.push(date2GlideDateOnly(date1, "short"));
  }

  return ret.join(", ");
};
