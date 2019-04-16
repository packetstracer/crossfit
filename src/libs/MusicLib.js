const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;

class MusicLib {
  static calculateTempoFromTaps (taps, timeIntervalInMs) {
    return taps / self.millisecondsToMinutes(timeIntervalInMs);
  }

  static millisecondsToMinutes (timeInMs) {
    return timeInMs / MILLISECONDS_PER_SECOND / SECONDS_PER_MINUTE;
  }
}

export default MusicLib;
