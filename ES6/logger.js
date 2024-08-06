export const TYPE_LOG = "log";
export const TYPE_WARN = "warn";
export const TYPE_ERROR = "error";
export const hello = () => console.log("hello");

function logger (log, type = TYPE_LOG) {
    console[type](log);
}

// 1 module chi export default thoi, nhung minh co the export vo so 
export default logger;
