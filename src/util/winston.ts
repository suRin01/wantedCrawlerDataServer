import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";
import { config } from "../common/constants";


const { combine, timestamp, printf } = winston.format;

// Define log format
const logFormat = printf(info => {
	return `${info.timestamp} ${info.level}: ${info.message}`;
});

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
export const logger:winston.Logger = winston.createLogger({
	format: combine(
		timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
		}),
		logFormat,
	),
	transports: [
		// info 레벨 로그를 저장할 파일 설정
		new winstonDaily({
			level: "info",
			datePattern: "YYYY-MM-DD",
			dirname: config.logFileLocation,
			filename: "%DATE%.log",
			maxFiles: 30,  // 30일치 로그 파일 저장
			zippedArchive: true, 
		}),
		// error 레벨 로그를 저장할 파일 설정
		new winstonDaily({
			level: "error",
			datePattern: "YYYY-MM-DD",
			dirname: config.logFileLocation + "/error",
			filename: "%DATE%.error.log",
			maxFiles: 30,
			zippedArchive: true,
		}),
	],
});

// Production 환경이 아닌 경우(dev 등) 
if (process.env.NODE_ENV !== "production") {
	logger.add(new winston.transports.Console({
		format: winston.format.combine(
			winston.format.colorize(),
			winston.format.simple(),
		)
	}));
}
