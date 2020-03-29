//return 00:00:00 of the day 
export function ToStartOfDay(date) {
  let d = new Date(date);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  return d;
}

//return 00:00:00 of next day
export function ToEndOfDay(date) {
  let d = new Date(date);
  d.setDate(d.getDate() + 1);
  return ToStartOfDay(d);
}

export function TimeFormatter(time) {
  const monthList = [
    'Januari',
    'Febuari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ];
  const dayList = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu'
  ];
  const timeSplitted = time.split('T');
  const currentTime = new Date();

  const year = parseInt(timeSplitted[0].split('-')[0], 10);
  const month = parseInt(timeSplitted[0].split('-')[1], 10);
  const date = parseInt(timeSplitted[0].split('-')[2], 10);

  const hourSplitted = timeSplitted[1].split('+');
  const hour = parseInt(hourSplitted[0].split(':')[0], 10);
  const hourString = hourSplitted[0].split(':')[0];
  const min = parseInt(hourSplitted[0].split(':')[1], 10);
  const minString = hourSplitted[0].split(':')[1];

  const monthString = monthList[month - 1];
  const yearDate = new Date(year, month - 1, date, hour, min);
  const dayString = dayList[yearDate.getDay()];

  function Additional() {
    const diff = currentTime - yearDate;
    if (diff / 31556952000 >= 1)
      return Math.floor(diff / 31556952000) + ' tahun yang lalu';
    if (diff / 2629746000 >= 1)
      return Math.floor(diff / 2629746000) + ' bulan yang lalu';
    if (diff / 604800000 >= 1)
      return Math.floor(diff / 604800000) + ' minggu yang lalu';
    if (diff / 86400000 >= 1)
      return Math.floor(diff / 86400000) + ' hari yang lalu';
    if (diff / 3600000 >= 1)
      return Math.floor(diff / 3600000) + ' jam yang lalu';
    if (diff / 60000 >= 1) return Math.floor(diff / 60000) + ' menit yang lalu';
    return 0;
  }

  return {
    time: yearDate,
    min: minString,
    hour: hourString,
    date: date,
    month: month,
    year: year,
    dayName: dayString,
    monthName: monthString,
    additional: Additional(),
  };
}

//export to ex: Senin, 11/11/2019
export function PrintDate(data) {
  const timeFormatted = TimeFormatter(data);
  return `${timeFormatted.dayName}, ${timeFormatted.date}/${timeFormatted.month}/${timeFormatted.year}`;
}
