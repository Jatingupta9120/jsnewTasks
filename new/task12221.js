function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];

    let [start, end] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        
        // getting each interval from the array
        const [nextStart, nextEnd] = intervals[i];

        // if current interval can be merged then update the ending time
        if (nextStart <= end) {
            end = Math.max(end, nextEnd);
        } else {
            merged.push([start, end]);
            [start, end] = intervals[i];
        }
    }
    merged.push([start, end]);

    return merged;
}

let intervals1 = [[1,3],[2,6],[8,10],[15,18]];
console.log("Output:", mergeIntervals(intervals1));

let intervals2 = [[1,4],[4,5]];
console.log("Output:", mergeIntervals(intervals2));