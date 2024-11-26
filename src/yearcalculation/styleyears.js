export const getDepartmentClass = (dept) => {
    switch (dept) {
        case "IT":
            return "web";
        case "Engineering":
            return "ICT";
        default:
            return "default";
    }
};