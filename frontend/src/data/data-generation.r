days <- 165

w <-rnorm(days,1.8)
d <- rnorm(days,35)
t <- rnorm(days,10)
b <- rnorm(days, 3)
z
for (x in 1:days) {
  moretravel <- sample(2, 1)
  travelfactor <- runif(1, 1.3, 2)
  if (x %% 7 == 0 | (x - 1) %% 7 == 0) {
    if (moretravel == 1) {
      w[x] = w[x] * travelfactor
      d[x] = d[x] * travelfactor
      t[x] = t[x] * travelfactor
      b[x] = b[x] * travelfactor
    } else {
      w[x] = w[x] / travelfactor
      d[x] = d[x] / travelfactor
      t[x] = t[x] / travelfactor
      b[x] = b[x] / travelfactor
    }
    
    
  }
}

cat("{\"personal-analytics-2: [\"")

for (x in 1:days) {
  dates <- c(44836 - x)
  betterDate <- as.Date(dates, origin = "1899-12-30")
  cat(paste("\"date\": \"", betterDate, sep = ""))
  cat("\",\n")
  cat(paste("\"miles-walked\": \"", w[x], sep = ""))
  cat("\",\n")
  cat(paste("\"miles-biked\": \"", b[x], sep = ""))
  cat("\",\n")
  cat(paste("\"miles-drove\": \"", d[x], sep = ""))
  cat("\",\n")
  cat(paste("\"miles-transit\": \"", t[x], sep = ""))
  cat("\"\n},{\n")
}