/**
 * A class to format mock data for a user.
 */
class MockDataFormatter {
  formatUserMainData(data, userId) {
    const userData = data.userMainData.find((user) => user.id === userId);
    return userData;
  }

  formatUserActivity(data, userId) {
    const activityData = data.userActivity.find(
      (activity) => activity.userId === userId
    );
    return activityData;
  }

  formatUserAverageSessions(data, userId) {
    return data.userAverageSessions.find(
      (session) => session.userId === userId
    );
  }

  formatUserPerformance(data, userId) {
    return data.userPerformance.find(
      (performance) => performance.userId === userId
    );
  }
}

export default MockDataFormatter;
