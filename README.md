# Timestamp Microservice

## Usage

- `/api/2015-12-25` → `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }`
- `/api/1451001600000` → `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }`
- `/api/invalid-date` → `{ "error": "Invalid Date" }`
- `/api/` → Current date/time in both formats

## Run Locally

```bash
npm install
npm start
```
