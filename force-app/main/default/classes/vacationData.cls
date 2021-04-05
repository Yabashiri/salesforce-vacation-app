public with sharing class vacationData {
    //check if the passed date is a weekend
    public static Boolean isWeekend(Date newDate)
    {
		String dateString = Datetime.newInstance(newDate.year(), newDate.month(),newDate.day()).format('EEE');
        return 'Sat'.equals(dateString) || 'Sun'.equals(dateString);
    }

    //calculate working days between the two dates (inclusive)
    public static Integer calculateWorkingDays(Date startDate, Date endDate) {
        Integer holidays = 0;
        Integer daysOfVacation = startDate.daysBetween(endDate) + 1; //we add +1 to include both start and end days
        Date currentDate = Date.newInstance(startDate.year(), startDate.month(), startDate.day());
        for(Integer i = 1; i <= daysOfVacation; i++) {
            if(isWeekend(currentDate)) {
                holidays++;
            }
        }
        return daysOfVacation - holidays;
    }
}
