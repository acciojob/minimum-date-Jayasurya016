function minDate(dates) {
  //write you code here
	const minDate = (dates) => {
    if (!dates || dates.length === 0) {
        return null;
    }

    const earliestDate = dates.reduce((min, current) => {
        return current < min ? current : min;
    });

    return earliestDate;
};

console.log("--- Example 1 ---");
const dates1 = ["2023/03/01", "2023/03/02", "2023/03/03"];
const result1 = minDate(dates1);
console.log(`Input: ${JSON.stringify(dates1)}`);
console.log(`Output: ${result1}`);

console.log("\n--- Example 2 ---");
const dates2 = ["2023/01/01", "2023/02/02", "2022/12/31"];
const result2 = minDate(dates2);
console.log(`Input: ${JSON.stringify(dates2)}`);
console.log(`Output: ${result2}`);

console.log("\n--- Example 3 (Different Months/Years) ---");
const dates3 = ["2025/07/15", "2025/01/15", "2024/12/31", "2025/02/01"];
const result3 = minDate(dates3);
console.log(`Input: ${JSON.stringify(dates3)}`);
console.log(`Output: ${result3}`);

}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
