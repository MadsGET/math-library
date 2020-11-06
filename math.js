const mathf =
{
	time:
	{
		// Formats an integer to time format.
		formatNumber(int)
		{
			return (int < 10) ? '0' + int : String(int);
		}
	},

	// Checks if a number is within a certain range. 
	withinRange(value, min, max)
	{
		return (value >= min && value <= max);
	}
}