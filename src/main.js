const { sendJiraReport } = require('./utils/report');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const API_TOKEN = process.env.API_TOKEN;
const JIRA_BASE_URL = process.env.JIRA_BASE_URL;

// JiraApi.getLastTen(JIRA_BASE_URL, API_TOKEN);
sendJiraReport(JIRA_BASE_URL, API_TOKEN);
