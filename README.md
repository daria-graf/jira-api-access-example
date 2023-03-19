# Introduction

This example project demonstrates, how to access Jira issues from a board and manipulate it by using an access token.

## A free Jira account

If you don't have an enterprise Jira account, then you can create your own free Jira account for the test purposes.
[Jira free plan](https://www.atlassian.com/de/software/jira/free).
When you are using Trello, then you probably already have an Atlassian-Account. You can log in with it and choose a free Jira plan.

## How to generate a jira access token

In order to enable the application to communicate with Jira, we must generate an access token. See more information here:
[Personal Access Token](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html#UsingPersonalAccessTokens-Beforeyoubegin).

## Storing Local Variables in .env

To make the application work localy, you should create an .env file, where you can store your Jira access token and base url. The file should look something like:

```console
API_TOKEN=3djI5VGFLMzghZHPQTZwZU9lb3oyQmtHRVNtjhUlZml0Q2s9QjkwNUQ0QjM=
JIRA_BASE_URL=https://dgraf.atlassian.net
NODE_ENV=development
```

## Jira API

This application is using the Jira API V2:
[Jira API v2](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issue-search/#api-rest-api-2-search-post).
