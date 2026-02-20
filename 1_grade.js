var result = 50;
if (result < 0 || result > 100) {
    console.log("invalid");
} else if (result < 40) {
    console.log("failed");
} else if (result >= 40 && result < 50) {
    console.log("tumi C grade paico");
} else if (result >= 50 && result < 60) {
    console.log("tumi B grade paico");
} else if (result >= 60 && result < 70) {
    console.log("tumi A- grade paico");
} else {
    console.log("tumi A grade paico");
}
