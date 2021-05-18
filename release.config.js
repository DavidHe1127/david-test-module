// semantic release config
// This test run was triggered on the branch chore/tidy-up, while semantic-release is configured to only publish from master, prerelease/support-prerelease-glob-name, therefore a new version won’t be published.

const text = {
  type: 'mrkdwn',
  text:
    'New Paid Time Off request from <example.com|Fred Enriquez>\n\n<https://example.com|View request>',
};

module.exports = {
  branches: [
    'master',
    { name: 'prerelease', channel: 'prerelease', prerelease: true },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    '@semantic-release/git',
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: false,
        notifyOnFail: false,
        slackWebhook: process.env.SLACK_WEBHOOK,
        packageName: 'david-test-module',
        branchesConfig: [
          {
            pattern: 'master',
            notifyOnSuccess: true,
            notifyOnFail: true,
            onSuccessTemplate: {
              text,
            },
          },
        ],
      },
    ],
  ],
  ci: false,
  dryRun: false,
};
