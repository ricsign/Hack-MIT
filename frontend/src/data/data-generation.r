days <- 165

w <-rnorm(days,1.8)
d <- rnorm(days,35)
t <- rnorm(days,10)
b <- rnorm(days, 3)

for (x in 1:days) {
  travelfactor <- rnorm(1, 1, 1.5)
  travelfactor <- 
  if (x %% 7 == 0 | (x - 1) %% 7 == 0) {
      w[x] = w[x] / travelfactor
      d[x] = d[x] / travelfactor
      t[x] = t[x] / travelfactor
      b[x] = b[x] / travelfactor
  }
}

cat("{\"personal-analytics-2: [\"")

for (x in 1:days) {
  dates <- c(44836 - x)
  betterDate <- as.Date(dates, origin = "1899-12-30")
  cat(paste("\"date\": \"", betterDate, sep = ""))
  cat("\",\n")
  cat(paste("\"miles-walked\": \"", abs(w[x]), sep = ""))
  cat("\",\n")
  cat(paste("\"miles-biked\": \"", abs(b[x]), sep = ""))
  cat("\",\n")
  cat(paste("\"miles-drove\": \"", abs(d[x]), sep = ""))
  cat("\",\n")
  cat(paste("\"miles-transit\": \"", abs(t[x]), sep = ""))
  cat("\"\n},{\n")
}