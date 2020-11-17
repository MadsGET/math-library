const mathf =
{
	// Checks if a number is within a certain range. 
	withinRange(value, min, max) {
		return (value >= min && value <= max);
	},

	// Clamps a value between a and b.
	clamp(value, min, max)
	{
		if (value < min)
		{
			return min;
		}
		else if (value > max)
		{
			return max;
		}
		else
		{
			return value;
		}
	},
}