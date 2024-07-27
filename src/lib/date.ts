export const formatDate = (dateString: string, locale = "el-GR") => {
	const date = new Date(dateString);

	const monthFormatter = new Intl.DateTimeFormat(locale, { month: "long" });
	const dayFormatter = new Intl.DateTimeFormat(locale, { day: "numeric" });
	const yearFormatter = new Intl.DateTimeFormat(locale, { year: "numeric" });
	const timeFormatter = new Intl.DateTimeFormat(locale, {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: false // 24-hour format
	});

	const month = monthFormatter.format(date);
	const day = dayFormatter.format(date);
	const year = yearFormatter.format(date);
	const time = timeFormatter.format(date);

	return `${day} ${month} ${year}, ${time}`;
};
