const mathf =
{
	time:
	{
		// Returns minutes as hour and minutes.
		convertMinutes(value)
		{
			let converted = value / 60;
			let hours = Math.floor(converted);
			let minutes = Math.round((converted - hours) * 60);
			return { hours: hours, minutes: minutes };
		},

		// Formats an integer to time format.
		formatNumber(int)
		{
			return (int < 10) ? '0' + int : String(int);
		},
	},

	// Checks if a number is within a certain range. 
	withinRange(value, min, max)
	{
		return (value >= min && value <= max);
	}
}