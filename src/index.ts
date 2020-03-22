import { startDialog } from "./dialog";

$(document).ready(function () {
    let activityReport = $("<button title='Activity Report' class='btn'>Activity Report</button>");
    let newControls = $("<li class='section'></li>").append(activityReport);
    $("#section-tabs").append(newControls);
    activityReport.click(() => startDialog("Activity Report"));

    /**
     * Allow user to specify threshold date
     * Get the students
     * Get the TAs/staff
     * Get the submissions
     * Construct two tables:
     * 1) Student's submissions
     *      Total assignments submitted, still remaining
     *      Total points achieved, still remaining
     * 2) TA's graded
     *      Total assignments graded
     *      Still remaining overall
     */
});

console.log("Hello world version 10 with TYPESCRIPT");