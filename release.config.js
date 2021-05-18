// semantic release config
// This test run was triggered on the branch chore/tidy-up, while semantic-release is configured to only publish from master, prerelease/support-prerelease-glob-name, therefore a new version won’t be published.
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
        branchesConfig: [
          {
            pattern: 'master',
            notifyOnSuccess: true,
            notifyOnFail: true,
          },
        ],
      },
    ],
  ],
  ci: false,
  dryRun: false,
};
