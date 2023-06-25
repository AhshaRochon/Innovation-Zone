# Set up libraries
library(data.table)
library(ggplot2)
library(dplyr)
 
# Read in data
data <- fread("Entrepreneurship_Incubator.csv")
 
# Select relevant variables
data <- select(data, id, incubator, start_year, end_year, participants)
 
# Clean data
data <- na.omit(data)
 
# Create unique values
id_vec <- unique(data$id)
incubator_vec <- unique(data$incubator)
 
# Create list with years
year_list <- seq(from = min(data$start_year, na.rm = TRUE), 
                  to = max(data$end_year, na.rm = TRUE))
 
# Initialize empty data frame
df <- data.frame(matrix(ncol = length(year_list), nrow = 0))
 
# Populate data frame
for (id in id_vec) {
 
  # Select records for ID
  data_selected <- subset(data, id == id)
 
  # Extract relevant information
  incubator <- data_selected$incubator[1]
  start_year <- min(data_selected$start_year)
  end_year <- max(data_selected$end_year)
  participants <- data_selected$participants
 
  # Create empty vector
  participant_vec <- numeric(length(year_list))
 
  # Iterate through list of years
  for (year in year_list) {
 
    # Check if program is still active
    if (year >= start_year & year <= end_year) {
 
      # Extract participants for current year
      participants_current <- subset(participants, year == year)
 
      # Compute totals
      participant_vec[year == year_list] <- sum(participants_current)
 
    } else {
 
      # Assign 0 participants for inactive year
      participant_vec[year == year_list] <- 0
 
    }
 
  }
 
  # Create data frame
  df_ref <- data.frame(incubator, id, as.data.frame(participant_vec))
 
  # Append to main master frame
  df <- rbind(df, df_ref)
 
}
 
# Set column names
names(df) <- c("incubator", "id", year_list)
 
# Rearrange columns
df <- select(df, incubator, id, year_list)
 
# Convert to data table format
dt <- as.data.table(df)
 
# Compute total participants by year
dt_yearly <- dt %>%
  group_by(year_list) %>%
  summarise(participants = sum(participants))
 
# Create plot
ggplot(dt_yearly) +
  geom_line(aes(x = year_list, y = participants, group = 1)) +
  labs(x = "Year", y = "Number of Participants",
       title = "Evolution of Entrepreneurship Incubator Participants") +
  scale_x_continuous(breaks = year_list)