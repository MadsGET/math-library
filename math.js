const mathf =
{
	// Checks if a number is within a certain range. 
	withinRange(value, min, max) {
		return (value >= min && value <= max);
	},

	// Clamps a value between a and b.
	clamp(value, min, max) {
		if (value < min) {
			return min;
		}
		else if (value > max) {
			return max;
		}
		else {
			return value;
		}
	},

	// Returns an index within given boundaries.
	boundaryLimit(value, limit, useRepeat)
	{
		if (value >= 0 && value <= limit)
		{
			return value;
		}
		else
		{
			if (useRepeat)
			{
				if (value < 0) return limit;
				if (value > limit) return 0;
			}
			else
			{
				return this.clamp(value, 0, limit);
			}
		}
	}
}